# Integrating `frontend2/src` with `py-backend` and SDK Hooks

This guide describes how to connect the molecular visualization frontend (`frontend2/src`) to the Python backend (`py-backend`) using the auto-generated SDK hooks in `frontend/sdk/src/custom_hooks.ts`. It also outlines how to update chat state management and message handling to match conventions in the original UI (`frontend/ui`).

## 1. Thread/Session ID Alignment

- In `frontend/ui/src/components/ChatPane.tsx`, the `thread_id` is used for backend message grouping.
- In `frontend2/src/components/ChatPanel.tsx`, use `activeSessionId` from Zustand store as the `thread_id` for all backend requests.
- You may use localStorage for storing thread/session ID and other state in `frontend2`, mirroring the approach in `frontend/ui/src/components/ChatPane.tsx`.
- For example, store `thread_id` in localStorage to persist chat sessions across reloads:

```typescript
const [threadId, setThreadId] = useState(() => {
  const saved = localStorage.getItem("chat_thread_id");
  return saved || uuidv4();
});
useEffect(() => {
  localStorage.setItem("chat_thread_id", threadId);
}, [threadId]);
```

This enables session continuity and is compatible with backend grouping.

- Example:
  ```tsx
  // When sending a message to backend
  const message = {
    ...otherFields,
    thread_id: activeSessionId, // aligns with backend
  };
  ```

## 2. Message Interface Unification

- Remove the custom `Message` interface from `frontend2/src/stores/chatHistoryStore.ts`.
- Instead, import and use the `Message` interface from `frontend/sdk/src/codegen_models/message.ts` everywhere in `frontend2`.
- Update all references, types, and message creation logic to match the backend schema:
  ```typescript
  import type { Message } from "frontend/sdk/src/codegen_models/message";
  // Message fields: id (number), sender (string), content (string), data (MessageData), thread_id (string)
  ```

## 3. Using SDK Hooks for Backend Communication

- Use the `useMessage` hook from `frontend/sdk/src/custom_hooks.ts` to send messages to the backend.
- Example usage:
  ```typescript
  import { useMessage } from "frontend/sdk/src/custom_hooks";
  const { sendMessage } = useMessage();
  sendMessage({
    message, // must match backend Message interface
    onSuccessCallback: (response) => {
      /* handle response */
    },
    onErrorCallback: (error) => {
      /* handle error */
    },
  });
  ```

## 4. ChatPanel Refactor Template

- Use `frontend/ui/src/components/ChatPane.tsx` as a template for updating `frontend2/src/components/ChatPanel.tsx`:
  - Use `activeSessionId` for `thread_id`.
  - Use SDK `Message` type for all chat messages.
  - Use `useMessage` for backend communication.
  - Ensure message objects have all required fields for backend compatibility.

## 5. Example Message Creation (Frontend2)

```typescript
const newMessage: Message = {
  id: messages.length + 1, // continue to use integer based id's for now
  sender: "user", // the ai message will come from the backend with "ai" in the sender
  content: input,
  data: null, // or appropriate MessageData
  thread_id: activeSessionId,
};
```

## 6. Key Files

- `frontend2/src/components/ChatPanel.tsx`: Main chat UI, should follow the above conventions.
- `frontend2/src/stores/chatHistoryStore.ts`: Update to use SDK Message type.
- `frontend/sdk/src/custom_hooks.ts`: Provides `useMessage` for backend communication.
- `frontend/sdk/src/codegen_models/message.ts`: Source of canonical Message type.
- `py-backend/src/main.py`: FastAPI backend entry point.

---

Follow these steps to ensure consistent, backend-compatible chat and message handling in `frontend2`. For further details, see the referenced files and the original UI implementation.

## 7. Message Field Mapping & Data Consistency

- Ensure all message objects sent to the backend have the correct field types:
  - `id`: Should be a number (not string/uuid). If using uuid, convert to integer or update backend to accept string.
  - `sender`: Should be `"user"` or `"ai"` (string).
  - `content`: String.
  - `data`: Should match the `MessageData` type or be `null`.
  - `thread_id`: Must be a string, matching `activeSessionId`.
- If your frontend uses `Date` objects for timestamps, but the backend expects ISO strings or omits timestamps, ensure conversion or ignore as needed.

## 8. Session and Message Persistence

- When importing/exporting sessions, update message IDs and thread IDs to avoid collisions and ensure backend compatibility.

## 9. Error Handling and Validation

- Always handle backend validation errors (e.g., missing fields, wrong types) in the UI.
- Use the `onErrorCallback` in `useMessage` to display user-friendly error messages.

## 10. MessageData Type

- If using the `data` field in `Message`, ensure it matches the backend's `MessageData` schema.
- If not needed, set `data: null` explicitly.

## 11. Backend API Endpoint

- Confirm that the backend endpoint used by `useMessage` matches the expected route and payload structure.

## 12. UI/UX Consistency

- Ensure the chat UI in `ChatPanel.tsx` matches the user experience of the original UI, including message bubbles, loading states, and error feedback.
