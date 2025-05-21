# Makefile for building and running a Go backend and a React frontend

project_name := vuejstest

frontend:
	@cd frontend && npm run dev

backend:
	@cd backend && go tool air

live: 
	@echo "Starting live development server..."
	${MAKE} -j 2 frontend backend

build:
	@echo "Building frontend..."	
	@cd frontend && npm run build
	@echo "Build complete."

	@echo "Building backend..."
	@rm -r bin && cd backend && go build -o ../bin/${project_name} main.go
	@echo "Build complete."
