# Archive Directory

This directory contains legacy code that has been superseded by newer implementations but is preserved for reference.

## Archived Files

### App.tsx (Archived: 2026-02-21)

**Reason for archival:** Replaced by `AppRouter.tsx` with improved architecture.

**Original purpose:**
- Legacy semantic search UI implementation
- Direct video upload and processing interface
- Results list with clip selection
- FreeMoCap batch processor integration

**Replaced by:**
- `AppRouter.tsx` - New routing structure with authentication
- `LabLabDemo.tsx` - Modernized upload/search/analysis interface
- Context API - Centralized state management (planned)

**Key differences from new implementation:**
1. Old: Single-page component approach
2. New: Proper routing with protected routes
3. Old: Component-level state management only
4. New: React Query + Context API (planned) for better state management
5. Old: No authentication guard
6. New: Firebase authentication with protected routes

**When to reference this code:**
- Understanding the original semantic search implementation
- Reviewing FreeMoCap integration patterns
- Comparing architectural approaches
- Restoring specific features if needed

**Restoration process:**
If you need to restore this implementation:
1. Copy this file back to `src/App.tsx`
2. Update `src/main.tsx` to import `App` instead of `AppRouter`
3. Update dependencies if needed
4. Note: May require adjustments to work with current constants structure

---

**Note:** This code is NOT actively maintained. Do not make changes here without understanding the impact on the current codebase.
