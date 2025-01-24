class Player {
    updatePosition(x, y) {
        // Get board dimensions
        const board = document.getElementById('board');
        const boardRect = board.getBoundingClientRect();
        
        // Get player dimensions
        const playerRect = this.playerElm.getBoundingClientRect();
        const playerWidth = playerRect.width;
        const playerHeight = playerRect.height;
        
        // Calculate boundaries
        const minX = 0;
        const maxX = boardRect.width - playerWidth;
        const minY = 0;
        const maxY = boardRect.height - playerHeight;
        
        // Clamp the position within boundaries
        this.x = Math.max(minX, Math.min(maxX, x));
        this.y = Math.max(minY, Math.min(maxY, y));
        
        this.updateUI();
    }

    updateUI() {
        // ... existing code ...
        this.playerElm.style.left = `${this.x}px`;
        this.playerElm.style.bottom = `${this.y}px`;
    }
} 