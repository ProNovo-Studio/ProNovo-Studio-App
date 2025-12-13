# 📦 Release Notes

## Version 1.0.7 – December 12, 2025

### 🚀 New Features

- **Code editor**: Added a text box in code viewer to allow for future updates in creating code to better visualize pdb

- **Pdb Viz**: Now loading designed pdb into molstar viewer

## Version 1.0.6 – December 7, 2025

### 🚀 New Features

- **Frontend Migration**: Migrated the molecular visualization platform to be the new frontend for this application, and hooked it up to the binder design backend

### 🐛 Bug Fixes

- Fixed improper parameters being passed to the RF diffusion validators

## Version 1.0.5 – November 19, 2025

### 🚀 New Features

- **Rf diffusion validations**: Set up proper validations of rf diffusion using pydantic and cleanly outputting errors to the users

- **Loading enhancements on frontend**: Set up a loading icon and error handling on the frontend for better user feedback

### 🐛 Bug Fixes

- Temporary fix for rate and token limits, but this will continue to be addressed in future updates. Plans are to add semaphores and pass pdb's by reference from a file store and DB.

## Version 1.0.4 – November 14, 2025

### 🚀 New Features

- **Contextual Awareness**: Added the ability for the agent to be aware of past conversations and guide the user towards using the tools
- **Prompt Engineering**: Improved prompts on RF diffusion tool to explain arguments a little better

## Version 1.0.3 – November 6, 2025

### 🚀 New Features

- **New pipeline with protein mpnn**: Set up a pipeline using rf diffusion and protein mpnn, this will be helpful for creating agent tools that use both

### 🐛 Bug Fixes

- Fixed poor error handling when the RF diffusion tool couldn't design anything

## Version 1.0.2 – July 16, 2025

### 🚀 New Features

- **Agentic Tooling**: Set up langgraph for better agent flow and tool calling, currently equipped with RF Diffusion and PDB search

### 🐛 Bug Fixes

- Fixed poor responses due to not looping back to main agent

## Version 1.0.1 – July 2, 2025

### 🚀 New Features

- **Agentic Tooling**: Connected tools to langChain agent such as RF Diffusion and PDB searcher

## Version 1.0.0 – June 19, 2025

### 🚀 New Features

- **Python backend**: Added a python backend and basic routes for chat bot, made a full-stack application
- **Chat Pane Component**: Added a responsive Material UI-based chat interface with message bubble styling, scrolling, and input box.
- **File Upload Component**: Introduced a upload component with icon, style, and file selection support.
- **Keyboard Shortcuts**: Send messages via `Enter` key while supporting `Shift+Enter` for new lines.

### 🐛 Bug Fixes

- Fixed layout issues in chat scroll container causing content overflow.
