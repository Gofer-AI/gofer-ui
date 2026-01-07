# Next Steps for Gofer AI Frontend

## Current Status

The frontend is now complete with:
- ✅ Video upload from device functionality
- ✅ Demo Mode toggle
- ✅ Semantic search interface
- ✅ Results display with timestamp jumping
- ✅ Copy timestamp feature
- ✅ Clean, responsive UI with Tailwind CSS

## Immediate Next Steps (Before Demo - Jan 8)

### 1. Backend Integration

#### Update Backend API Endpoints

The backend needs to implement these endpoints that the frontend expects:

```
POST /api/v1/search
Request Body:
{
  "query": string,
  "video_id": string (optional),
  "top_k": number (default: 10),
  "include_summary": boolean (default: false)
}

Response:
{
  "results": SearchResult[],
  "query_time_ms": number
}
```

#### SearchResult Interface:
```typescript
{
  segment_id: string,
  video_id: string,
  video_title: string,
  start_time: number,        // seconds
  end_time: number,          // seconds
  score: number,             // 0-1
  thumbnail_url: string,
  visual_context: string,    // Azure AI Vision description
  transcript_snippet?: string,
  ai_summary?: string
}
```

### 2. Video Upload Flow

Currently, the frontend accepts video file uploads but doesn't send them to the backend. You need to:

#### Option A: Direct Backend Upload (Recommended for MVP)
1. Add a new endpoint in backend: `POST /api/v1/videos/upload`
2. Update frontend `api/client.ts` to send the video file
3. Backend should:
   - Upload video to Azure Blob Storage
   - Queue video for processing (Azure Queue Storage)
   - Return video ID and processing status
   - Process video asynchronously:
     - Extract frames at intervals
     - Send frames to Azure AI Vision
     - Generate embeddings with Azure OpenAI
     - Index in Azure AI Search

#### Option B: Mock Data for Demo (Quick Solution)
1. Pre-index a demo video in the backend
2. Update `DEMO_VIDEO_ID` in `src/constants.ts`
3. Enable Demo Mode in the UI
4. Search will work against the pre-indexed video

### 3. Fix API Status Check

The frontend checks API status at `/api/v1/videos` with a HEAD request. Update the backend to:

```python
@router.head("/videos")
async def check_videos_endpoint():
    return Response(status_code=200)
```

Or update the frontend to use `/health` endpoint:

```typescript
// In src/api/client.ts
export async function checkAPIStatus(): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE_URL}/health`);
    return res.ok;
  } catch {
    return false;
  }
}
```

### 4. Azure Resources Setup

If not already done, provision these Azure services:

```bash
# Set variables
RESOURCE_GROUP="gofer-ai-rg"
LOCATION="eastus"
STORAGE_ACCOUNT="goferaisa"
SEARCH_SERVICE="gofer-search"
OPENAI_SERVICE="gofer-openai"
VISION_SERVICE="gofer-vision"

# Create resource group
az group create --name $RESOURCE_GROUP --location $LOCATION

# Create storage account
az storage account create \
  --name $STORAGE_ACCOUNT \
  --resource-group $RESOURCE_GROUP \
  --location $LOCATION \
  --sku Standard_LRS

# Create AI Search
az search service create \
  --name $SEARCH_SERVICE \
  --resource-group $RESOURCE_GROUP \
  --location $LOCATION \
  --sku basic

# Create Azure OpenAI
az cognitiveservices account create \
  --name $OPENAI_SERVICE \
  --resource-group $RESOURCE_GROUP \
  --location $LOCATION \
  --kind OpenAI \
  --sku S0

# Create Azure AI Vision
az cognitiveservices account create \
  --name $VISION_SERVICE \
  --resource-group $RESOURCE_GROUP \
  --location $LOCATION \
  --kind ComputerVision \
  --sku S1
```

### 5. Update Backend .env

After provisioning Azure resources, update backend `.env`:

```bash
# Azure Storage
AZURE_STORAGE_CONNECTION_STRING="<from Azure portal>"
AZURE_STORAGE_CONTAINER_NAME="videos"

# Azure AI Search
AZURE_SEARCH_ENDPOINT="https://<search-name>.search.windows.net"
AZURE_SEARCH_KEY="<admin-key>"
AZURE_SEARCH_INDEX_NAME="video-segments"

# Azure OpenAI
AZURE_OPENAI_ENDPOINT="https://<openai-name>.openai.azure.com"
AZURE_OPENAI_KEY="<api-key>"
AZURE_OPENAI_DEPLOYMENT_NAME="text-embedding-ada-002"

# Azure AI Vision
AZURE_VISION_ENDPOINT="https://<vision-name>.cognitiveservices.azure.com"
AZURE_VISION_KEY="<api-key>"
```

### 6. Test End-to-End Flow

#### Quick Test (Demo Mode):
1. Start backend: `uvicorn main:app --reload`
2. Start frontend: `npm run dev`
3. Enable Demo Mode in UI
4. Try example queries
5. Verify results display and timestamp jumping works

#### Full Test (With Upload):
1. Upload a short test video (< 5 minutes)
2. Wait for processing to complete
3. Search for moments in the video
4. Verify results are relevant
5. Test timestamp jumping

## Demo Day Checklist (Jan 8)

- [ ] Backend running and connected to Azure
- [ ] Demo video indexed and searchable
- [ ] `DEMO_VIDEO_ID` updated in frontend
- [ ] All example queries tested
- [ ] Video player timestamp jumping works
- [ ] Copy timestamp feature works
- [ ] API status shows "Online"
- [ ] Have backup plan (screenshots/video) if live demo fails
- [ ] Test on presentation computer
- [ ] Prepare talking points about Azure AI services used

## Known Issues / Future Improvements

### Current Limitations:
- Video upload UI exists but not connected to backend yet
- No progress indicator for video processing
- No authentication/user accounts
- Single video support only (no multi-video search)
- No video trimming/export features

### Future Enhancements:
- User authentication (Azure AD B2C)
- Video upload progress tracking
- Webhook notifications when video is indexed
- Multi-video search across library
- Export clips as new video files
- Collaborative features (share searches, playlists)
- Analytics dashboard
- Mobile responsive improvements

## Troubleshooting

### Frontend shows "Offline"
- Check backend is running on port 8000
- Verify CORS is configured for `http://localhost:5173`
- Update API status check to use `/health` endpoint

### Search returns no results
- Verify video is indexed (status: "indexed")
- Check Azure AI Search has embeddings
- Try broader search queries
- Check backend logs for errors

### Video won't play
- Ensure video file is in supported format (MP4, WebM)
- Check browser console for CORS errors
- Verify video URL is accessible

## Resources

- [Azure AI Vision Docs](https://learn.microsoft.com/en-us/azure/ai-services/computer-vision/)
- [Azure AI Search Docs](https://learn.microsoft.com/en-us/azure/search/)
- [Azure OpenAI Docs](https://learn.microsoft.com/en-us/azure/ai-services/openai/)
- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [React Query Docs](https://tanstack.com/query/latest)

## Contact

For issues or questions about the frontend, check the GitHub repository issues or contact the Gofer AI team.
