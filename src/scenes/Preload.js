
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// sbackground
		this.add.image(960, 549, "sbackground");

		// sLogo
		this.add.image(1013, 425, "sLogo");

		// progress
		const progress = this.add.text(994, 874, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.visible = false;
		progress.text = "0%";
		progress.setStyle({ "fontSize": "30px" });

		// loader_Back
		const loader_Back = this.add.image(985, 980, "Loader-Back");
		loader_Back.visible = false;

		// timer_fill
		const timer_fill = this.add.image(985, 980, "timer-fill");
		timer_fill.scaleX = 1.5;
		timer_fill.scaleY = 1.1;
		timer_fill.visible = false;

		// progress (components)
		new PreloadText(progress);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();
		this.editorPreload();
		this.outerBar = this.add.sprite(985, 980, "Loader-Back");
		this.outerBar.setOrigin(0.5);

		this.innerBar = this.add.sprite(
			985 / 2 + 180,
			980,
			"timer-fill"
		).setScale(1.5, 1.1);
		this.innerBar.setOrigin(0, 0.5);

		this.innerBarWidth = this.innerBar.displayWidth;

		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.innerBar.x,
			this.innerBar.y - this.innerBar.displayHeight / 2,
			this.innerBar.displayWidth,
			this.innerBar.displayHeight
		);

		this.innerBar.setMask(this.maskGraphics.createGeometryMask());

		const loadingDuration = 3000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			const currentProgress = currentInterval * progressIncrement;
			 // Replace with your game object image
			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(
				this.innerBar.x,
				this.innerBar.y - this.innerBar.displayHeight / 2,
				this.innerBarWidth * currentProgress,
				this.innerBar.displayHeight
			);

			currentInterval++;

			if (currentProgress >= 1) {
				clearInterval(progressInterval);
				this.scene.start("Level");
			}
		};

		const progressInterval = setInterval(updateProgressBar, intervalDuration);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here