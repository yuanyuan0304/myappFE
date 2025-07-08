import type {
  MetaFunction,
  ActionFunctionArgs,
  LoaderFunctionArgs,
} from "@remix-run/node";
import {
  Form,
  useLoaderData,
  useFetcher,
  Link,
  redirect,
  json,
} from "@remix-run/react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "User Management" },
    { name: "description", content: "CRUD operations for users" },
  ];
};

// Load all users or single user based on URL
export async function loader({ request, params }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("id") || params.id;

  const response = userId
    ? await fetch("http://localhost:8080/api/getUserById", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId }),
      })
    : await fetch("http://localhost:8080/api/getAllUsers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });

  if (!response.ok) {
    throw new Response("User not found", { status: 404 });
  }

  return await response.json();
}

// Handle all actions (create, update, delete)
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const actionType = formData.get("_action");
  const userId = formData.get("id");

  try {
    switch (actionType) {
      case "create":
        const newUser = {
          name: formData.get("name"),
          email: formData.get("email"),
        };
        await fetch("http://localhost:8080/api/createUser", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        });
        break;

      case "update":
        const updatedUser = {
          id: userId,
          name: formData.get("name"),
          email: formData.get("email"),
        };
        await fetch(`http://localhost:8080/api/updateUser`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedUser),
        });
        break;

      case "delete":
        await fetch(`http://localhost:8080/api/deleteUser`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: userId }),
        });
        break;

      default:
        throw new Error("Invalid action");
    }

    return redirect("/");
  } catch (error) {
    return json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 400 }
    );
  }
}

export default function UsersPage() {
  const users = useLoaderData<typeof loader>();
  const fetcher = useFetcher();
  const [editingId, setEditingId] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>User Management</h1>

      {/* Create User Form */}
      <div style={{ marginBottom: "2rem" }}>
        <h2>Create New User</h2>
        <Form method="post">
          <input type="hidden" name="_action" value="create" />
          <div>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
          </div>
          <button type="submit">Create</button>
        </Form>
      </div>

      {/* Users List */}
      <h2>Users List</h2>
      {Array.isArray(users) ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {users.map((user) => (
            <li
              key={user.id}
              style={{
                marginBottom: "1rem",
                padding: "1rem",
                border: "1px solid #ddd",
              }}
            >
              {editingId === user.id ? (
                <fetcher.Form method="post">
                  <input type="hidden" name="_action" value="update" />
                  <input type="hidden" name="id" value={user.id} />
                  <div>
                    <label>
                      Name:
                      <input
                        type="text"
                        name="name"
                        defaultValue={user.name}
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Email:
                      <input
                        type="email"
                        name="email"
                        defaultValue={user.email}
                        required
                      />
                    </label>
                  </div>
                  <button type="submit">Save</button>
                  <button type="button" onClick={() => setEditingId(null)}>
                    Cancel
                  </button>
                </fetcher.Form>
              ) : (
                <>
                  <div>ID: {user.id}</div>
                  <div>Name: {user.name}</div>
                  <div>Email: {user.email}</div>
                  <div>
                    Created: {new Date(user.createdAt).toLocaleString()}
                  </div>
                  <div style={{ marginTop: "0.5rem" }}>
                    <button onClick={() => setEditingId(user.id)}>Edit</button>
                    <Form
                      method="post"
                      style={{ display: "inline", marginLeft: "0.5rem" }}
                    >
                      <input type="hidden" name="_action" value="delete" />
                      <input type="hidden" name="id" value={user.id} />
                      <button type="submit">Delete</button>
                    </Form>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div style={{ padding: "1rem", border: "1px solid #ddd" }}>
          <h3>Single User View</h3>
          <div>ID: {users.id}</div>
          <div>Name: {users.name}</div>
          <div>Email: {users.email}</div>
          <div>Created: {new Date(users.created_at).toLocaleString()}</div>
          <div style={{ marginTop: "1rem" }}>
            <Link to="/">Back to all users</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div style={{ padding: "1rem", color: "red" }}>
      <h2>Error</h2>
      <p>Something went wrong while processing your request.</p>
      <Link to="/">Return to users list</Link>
    </div>
  );
}
