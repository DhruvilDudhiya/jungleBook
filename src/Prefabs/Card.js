
// You can write more code here

/* START OF COMPILED CODE */

class Card extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// curve4
		const curve4 = scene.add.image(6.78348266260025, 7.11554245756804, "Animal-Profile-Base");
		curve4.scaleX = 1.2;
		curve4.scaleY = 1.2;
		this.add(curve4);

		// chicken
		const chicken = scene.add.image(1, -13, "chicken");
		chicken.scaleX = 0.8;
		chicken.scaleY = 0.8;
		this.add(chicken);

		this.curve4 = curve4;
		this.chicken = chicken;

		/* START-USER-CTR-CODE */
         this.oSceneObj = scene;
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	curve4;
	/** @type {Phaser.GameObjects.Image} */
	chicken;

	/* START-USER-CODE */
    setAnimalImages(randImage){
        this.randImage = randImage;
        this.chicken.setTexture(randImage);
    }
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
