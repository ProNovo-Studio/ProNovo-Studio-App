# Refactoring MolstarViewer.tsx to Use PDB Data Instead of PDB ID

## Overview

Currently, `lastLoadedPdb` in `MolstarViewer.tsx` and related components is assumed to be a PDB ID (e.g., "1CBS"). To support workflows where the actual PDB data (as a string or object) is available in state, we need to refactor the viewer and its dependencies to:

- Store the full PDB data in `lastLoadedPdb`
- Load structures in Molstar directly from this data, not by fetching from a URL
- Update all code paths, utilities, and stores that interact with PDB loading

## Proposed Refactor Steps

### 1. Update State Management

- Change `lastLoadedPdb` in the Zustand store to hold the actual PDB data, keep it as a string | null, not just the ID. The pdb data coming in will not be associated with any ID.

```typescript
// In appStore.ts
interface AppState {
  // ...existing fields...
- lastLoadedPdb: string | null; // keep the same
}
```

### 2. Update PDB Loading Logic in MolstarViewer

- When loading a structure, check if `lastLoadedPdb` contains data. If so, use Molstar's `pluginInstance.builders.data.raw` to load from the string, not from a URL.
- Remove or refactor any code that fetches PDB data from the RCSB server.

```typescript
// Instead of:
const data = await pluginInstance.builders.data.download({
  url: `https://files.rcsb.org/view/${pdbId}.pdb`,
  isBinary: false,
});

// Use:
const data = await pluginInstance.builders.data.raw({
  data: lastLoadedPdb,
});
```

### 3. Update Structure Parsing and Representation

- The rest of the Molstar pipeline (parseTrajectory, createModel, etc.) remains the same, but now operates on the in-memory data.

### 4. Update All Callers and Utilities

- Ensure any code that sets `lastLoadedPdb` expects pdb data, not an id.
- Update upload handlers, chat commands, or API responses to pass the full PDB data to the store.

## Dependencies to Update

- `MolstarViewer.tsx`: All structure loading logic
- `chatHistoryStore.ts`: Look for TODO, uncomment the code and modify only if neccessary
- Any code that triggers structure reloads (chat, API, etc.)
