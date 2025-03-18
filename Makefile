prod:
	@echo "Switching to main branch and pulling latest changes..."
	git checkout main
	git pull origin main
	@echo "Building the project..."
	npm run build
	@echo "Stopping PM2 service..."
	pm2 delete arvipates-front-prod
	@echo "Starting PM2 service..."
	pm2 start ecosystem.config.cjs --only arvipates-front-prod
	@echo "Deployment complete."
preprod:
	@echo "Switching to main branch and pulling latest changes..."
	git checkout main
	git pull origin main
	@echo "Building the project..."
	npm run build
	@echo "Stopping PM2 service..."
	pm2 delete arvipates-front-preprod
	@echo "Starting PM2 service..."
	pm2 start ecosystem.config.cjs --only arvipates-front-preprod
	@echo "Deployment complete."

