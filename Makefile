# Discord Dota Web - Makefile
# Build and deploy commands for Docker image

# Registry configuration
REGISTRY := orgmcr.or-gm.com/osmargm1202/discord-dota-web
TAG ?= latest
IMAGE := $(REGISTRY):$(TAG)

# Build arguments (optional, can be overridden)
# Leave BACKGROUND_URL empty to use local /dota2.png
BACKGROUND_URL ?=
FIFREX_LOGO_URL ?= https://r2.or-gm.com/fifrex.png

.PHONY: all build push clean help

# Default target: build and push
all: build push

# Build Docker image
build:
	@echo "Building Docker image: $(IMAGE)"
	docker build \
		--build-arg NEXT_PUBLIC_BACKGROUND_URL=$(BACKGROUND_URL) \
		--build-arg NEXT_PUBLIC_FIFREX_LOGO_URL=$(FIFREX_LOGO_URL) \
		-t $(IMAGE) .
	@echo "Build complete: $(IMAGE)"

# Push image to registry
push:
	@echo "Pushing image to registry: $(IMAGE)"
	docker push $(IMAGE)
	@echo "Push complete: $(IMAGE)"

# Remove local image
clean:
	@echo "Removing local image: $(IMAGE)"
	docker rmi $(IMAGE) || true

# Show help
help:
	@echo "Discord Dota Web - Makefile Commands"
	@echo ""
	@echo "Usage:"
	@echo "  make build    - Build Docker image"
	@echo "  make push     - Push image to registry"
	@echo "  make all      - Build and push (default)"
	@echo "  make clean    - Remove local image"
	@echo "  make help     - Show this help"
	@echo ""
	@echo "Variables:"
	@echo "  TAG=<version>           - Image tag (default: latest)"
	@echo "  BACKGROUND_URL=<url>    - Background image URL"
	@echo "  FIFREX_LOGO_URL=<url>   - Fifrex logo URL"
	@echo ""
	@echo "Examples:"
	@echo "  make build TAG=v1.0.0"
	@echo "  make all TAG=latest"
