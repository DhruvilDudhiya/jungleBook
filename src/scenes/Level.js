
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		this.add.image(957, 541, "background");

		// play
		const play = this.add.image(975, 897, "Start-Button");

		// logo
		const logo = this.add.image(1000, 428, "Logo");

		this.play = play;
		this.logo = logo;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	play;
	/** @type {Phaser.GameObjects.Image} */
	logo;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		this.oTweenManager = new TweenManager(this);
		this.oTweenManager.logoTween();
		this.play.setInteractive().on("pointerdown", function () {
			this.add.tween({
				targets: this.play,
				scaleX: "*=0.9",
				scaleY: "*=0.9",
				duration: 100,
				yoyo: true,
				delay : 100,
				onComplete: () => {
					this.scene.start("Game");
				}
			});
		}, this)
	}
	/* END-USER-CODE */
}
/* END OF COMPILED CODE */

// You can write more code here
