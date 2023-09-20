
// You can write more code here

/* START OF COMPILED CODE */

class Holder extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// wodden_Stick
		const wodden_Stick = scene.add.image(1, 69, "Wodden-Stick");
		this.add(wodden_Stick);

		// wodden_Stick_1
		const wodden_Stick_1 = scene.add.image(72, 5, "Wodden-Stick");
		wodden_Stick_1.angle = 89;
		wodden_Stick_1.setOrigin(0.5688242176845941, 0.5);
		this.add(wodden_Stick_1);

		// Holder
		const holder = scene.add.image(0, 0, "Word-Base");
		holder.scaleX = 1.1;
		holder.scaleY = 1.1;
		this.add(holder);

		// holderText
		const holderText = scene.add.text(1, -2, "", {});
		holderText.setOrigin(0.5, 0.5);
		holderText.text = "A";
		holderText.setStyle({ "color": "#5c1303", "fontFamily": "ComicSansMSBold", "fontSize": "50px", "fontStyle": "bold" });
		this.add(holderText);

		this.wodden_Stick_1 = wodden_Stick_1;
		this.holder = holder;
		this.holderText = holderText;

		/* START-USER-CTR-CODE */
        this.oSceneObj = scene;
      //  this.oSceneObj.add.existing(this);
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	wodden_Stick_1;
	/** @type {Phaser.GameObjects.Image} */
	holder;
	/** @type {Phaser.GameObjects.Text} */
	holderText;

	/* START-USER-CODE */
	settext(aImageFiles1){
	this.aImageFiles1 = aImageFiles1
	this.holderText.text = this.aImageFiles1;
	this.holderText.visible = false;
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
