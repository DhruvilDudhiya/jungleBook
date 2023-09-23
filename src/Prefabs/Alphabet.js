
// You can write more code here

/* START OF COMPILED CODE */

class Alphabet extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 4, y ?? 2);

		this.scaleX = 1.0670434881889979;
		this.scaleY = 0.9771332279777492;

		// curve4_1
		const curve4_1 = scene.add.image(0, 0, "Word-Box");
		this.add(curve4_1);

		// alphabetText
		const alphabetText = scene.add.text(3, -8, "", {});
		alphabetText.scaleX = 2;
		alphabetText.scaleY = 2;
		alphabetText.setOrigin(0.5, 0.5);
		alphabetText.text = "A";
		alphabetText.setStyle({ "color": "#5c1303", "fontSize": "30px" });
		this.add(alphabetText);

		this.curve4_1 = curve4_1;
		this.alphabetText = alphabetText;

		/* START-USER-CTR-CODE */
		this.oSceneObj = scene;
		this.oSceneObj.sco = 0;


		//this.holderArrArr = [];
		//this.textContainer.add.existing(this);

		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	curve4_1;
	/** @type {Phaser.GameObjects.Text} */
	alphabetText;

	/* START-USER-CODE */


	setAlphabetData(randText, holder) {
		// this.oSceneObj.holderArr = [];
		this.isMovable = true;
		this.oSceneObj.holderArr.push(holder);
		console.log("push", this.oSceneObj.holderArr);
		this.preX = this.x;
		this.preY = this.y;
		this.randText = randText;
		// this.matchTimer = this.oSceneObj.time.delayedCall(5000, function () {
		// 	this.autoMatchWithHolder(holder);
		// }, null, this);
		// this.autoMatchWithHolder(holder);
		this.alphabetText.text = this.randText;
		this.setSize(this.curve4_1.width * (1), this.curve4_1.height * (1));
		this.setInteractive({
			draggable: true
		});
		this.oSceneObj.input.setDraggable(this);
		this.oSceneObj.input.on('drag', function (pointer, gameObject, dragX, dragY) {
			// this.oGameManager.alphabetContainer
			this.oSceneObj.alphabetContainer.bringToTop(gameObject);
			if (gameObject == this && this.oSceneObj.container_popup.scale == 0) {
				gameObject.x = dragX;
				gameObject.y = dragY;
			}
		}, this);
		this.oSceneObj.input.on('dragend', function (pointer, gameObject, dragX, dragY) {
			if (gameObject == this && this.isMovable && this.oSceneObj.timeLeft > 0) { //gameObject
				gameObject.z = 0;
				var minDistance = 100;
				var deckType;
				for (var i = 0; i < this.oSceneObj.holderArr.length; i++) {
					var X2 = this.oSceneObj.holderArr[i].x;
					var Y2 = this.oSceneObj.holderArr[i].y;
					if (pointer.x >= X2 - 40 && pointer.x <= X2 + 40 && pointer.y >= Y2 - 40 && pointer.y <= Y2 + 40 && this.oSceneObj.holderArr[i].aImageFiles1 != "non" && this.randText == this.oSceneObj.holderArr[i].aImageFiles1) {
						deckType = this.oSceneObj.holderArr[i].aImageFiles1;
						this.oSceneObj.holderArr[i].aImageFiles1 = "non";
						break;
					}
				}
				if (deckType != "non" && this.randText == deckType) {
					this.oSceneObj.tweens.add({
						targets: this,
						angle: 360,
						duration: 300,
						x: X2,
						y: Y2 + 6,
						onComplete: () => {

						}
					});
					gameObject.input.enabled = false;
					// this.oSceneObj.sound.play("matching");
					this.oSceneObj.sco = this.oSceneObj.sco + 1;
					console.log("winner1", this.oSceneObj.holderArr);
					// this.oSceneObj.score.text = "Score: " + this.oSceneObj.sco;
					if (this.oSceneObj.holderArr.push() == this.oSceneObj.sco) {
						console.log("winner", this.oSceneObj.holderArr);
						this.oSceneObj.holderArr = [];
						// if (this.oSceneObj.oGameManager.currentLevel == this.oSceneObj.oGameManager.isLastLevel) {
						if (nCurrentLevel == this.oSceneObj.oGameManager.isLastLevel) {
							this.oSceneObj.retry_Button.visible = false;
							this.oSceneObj.next_Button.visible = false;
							this.oSceneObj.replay_Button.visible = false;
							this.oSceneObj.replay_text.visible = false;
							this.oSceneObj.home_btn.visible = true;
							this.oSceneObj.popup_txt.text = "completed";
							this.oSceneObj.oTweenManager.popUpTweenAnimation(this.oSceneObj.container_popup);
							this.oSceneObj.timerEvent.destroy();
							// this.oSceneObj.gameObjectToFollow.setVisible(true);
						} else {
							this.oSceneObj.retry_Button.visible = false;
							this.oSceneObj.next_Button.visible = true;
							this.oSceneObj.popup_txt.text = "WellDone";
							this.oSceneObj.oTweenManager.popUpTweenAnimation(this.oSceneObj.container_popup);
							this.oSceneObj.timerEvent.destroy();
							// this.oSceneObj.gameObjectToFollow.setVisible(false);
						}
					}
				} else {
					this.x = this.preX;
					this.y = this.preY;
					// this.oSceneObj.sound.add("sound2");
					// this.oSceneObj.sound.play("sound2");
				}
			}
		}, this)
	}
	autoMatchWithHolder(holder) {
		console.log("holder", holder);
		const matchingHolder = this.oSceneObj.holderArr.find((holder) => holder.aImageFiles1 === this.randText);
		if (matchingHolder) {
			if (!matchingHolder.isMatched) {
				this.oSceneObj.tweens.add({
					targets: this,
					angle: 360, // Rotate by 360 degrees or add random rotation here
					duration: 300,
					x: matchingHolder.x,
					y: matchingHolder.y + 6,
					onComplete: () => {
						matchingHolder.isMatched = true;
					}
				})

			}
		}
	}
	getRandomRotation(minAngle, maxAngle) {
		return Phaser.Math.RND.between(minAngle, maxAngle);
	}














	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
