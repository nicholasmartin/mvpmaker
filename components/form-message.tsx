export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {"success" in message && (
        <div className="bg-green-100 text-green-800 border-l-4 border-green-600 px-4 py-3 rounded">
          {message.success}
        </div>
      )}
      {"error" in message && (
        <div className="bg-red-100 text-red-800 border-l-4 border-red-600 px-4 py-3 rounded">
          {message.error}
        </div>
      )}
      {"message" in message && (
        <div className="bg-blue-100 text-blue-800 border-l-4 border-blue-600 px-4 py-3 rounded">{message.message}</div>
      )}
    </div>
  );
}
