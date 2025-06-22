# ---------- Frontend build stage ----------
  FROM node:20 AS frontend-build
  WORKDIR /client
  COPY client/ ./
  RUN npm install
  RUN npm run build  # This will generate dist/ with manifest.json
  
  # ---------- .NET backend build stage ----------
  FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
  WORKDIR /app
  COPY . ./
  RUN dotnet restore react-dotnet-demo-1.csproj
  RUN dotnet publish react-dotnet-demo-1.csproj -c Release -o /app/publish
  
  # ---------- Runtime stage ----------
  FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
  WORKDIR /app
  
  # Copy backend output
  COPY --from=build /app/publish .
  
  # Copy frontend build output to wwwroot
  
  # Start the app
  ENTRYPOINT ["dotnet", "react-dotnet-demo-1.dll"]
  