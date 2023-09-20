
// You can write more code here

/* START OF COMPILED CODE */

class Game extends Phaser.Scene {

	constructor() {
		super("Game");

		/* START-USER-CTR-CODE */
		this.holderArr = [];
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		this.add.image(964, 538, "background");

		// leaf_Top
		this.add.image(122, 31, "Leaf-Top");

		// soundOnBtn
		const soundOnBtn = this.add.image(80, 98, "Sound-ON");
		soundOnBtn.scaleX = 0.8;
		soundOnBtn.scaleY = 0.8;
		soundOnBtn.setOrigin(0.4802859285965567, 0.4439244191190946);

		// soundOffBtn
		const soundOffBtn = this.add.image(82, 102, "Sound-OFF");
		soundOffBtn.scaleX = 0.8;
		soundOffBtn.scaleY = 0.8;
		soundOffBtn.visible = false;

		// leaf_Bottom
		this.add.image(67, 150, "Leaf-Bottom");

		// random_Word_Box
		this.add.image(1561, 601, "Random-Word-Box");

		// holderContainer
		const holderContainer = this.add.container(0, 0);

		// animalCardContainer
		const animalCardContainer = this.add.container(0, 0);

		// alphabetContainer
		const alphabetContainer = this.add.container(0, 0);

		// container_timer
		const container_timer = this.add.container(0, -1);

		// container_popup
		const container_popup = this.add.container(960, 540);
		container_popup.scaleX = 0;
		container_popup.scaleY = 0;

		// black_Screen
		const black_Screen = this.add.image(0, 0, "Black-Screen");
		container_popup.add(black_Screen);

		// pop_Up_Box
		const pop_Up_Box = this.add.image(0, 0, "Pop-Up-Box");
		container_popup.add(pop_Up_Box);

		// popup_txt
		const popup_txt = this.add.text(0, -60, "", {});
		popup_txt.setOrigin(0.5, 0.5);
		popup_txt.text = "WellDone";
		popup_txt.setStyle({ "color": "#5c1303", "fontSize": "50px" });
		container_popup.add(popup_txt);

		// next_Button
		const next_Button = this.add.image(0, 60, "Next-Button");
		container_popup.add(next_Button);

		// retry_Button
		const retry_Button = this.add.image(0, 60, "Retry-Button");
		retry_Button.visible = false;
		container_popup.add(retry_Button);

		// replay_Button
		const replay_Button = this.add.image(0, 60, "Plain-Button");
		replay_Button.visible = false;
		container_popup.add(replay_Button);

		// replay_text
		const replay_text = this.add.text(0, 53, "", {});
		replay_text.setOrigin(0.5, 0.5);
		replay_text.visible = false;
		replay_text.text = "REPLAY";
		replay_text.setStyle({ "color": "#5c1303", "fontSize": "40px" });
		container_popup.add(replay_text);

		this.soundOnBtn = soundOnBtn;
		this.soundOffBtn = soundOffBtn;
		this.holderContainer = holderContainer;
		this.animalCardContainer = animalCardContainer;
		this.alphabetContainer = alphabetContainer;
		this.container_timer = container_timer;
		this.container_popup = container_popup;
		this.black_Screen = black_Screen;
		this.popup_txt = popup_txt;
		this.next_Button = next_Button;
		this.retry_Button = retry_Button;
		this.replay_Button = replay_Button;
		this.replay_text = replay_text;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	soundOnBtn;
	/** @type {Phaser.GameObjects.Image} */
	soundOffBtn;
	/** @type {Phaser.GameObjects.Container} */
	holderContainer;
	/** @type {Phaser.GameObjects.Container} */
	animalCardContainer;
	/** @type {Phaser.GameObjects.Container} */
	alphabetContainer;
	/** @type {Phaser.GameObjects.Container} */
	container_timer;
	/** @type {Phaser.GameObjects.Container} */
	container_popup;
	/** @type {Phaser.GameObjects.Image} */
	black_Screen;
	/** @type {Phaser.GameObjects.Text} */
	popup_txt;
	/** @type {Phaser.GameObjects.Image} */
	next_Button;
	/** @type {Phaser.GameObjects.Image} */
	retry_Button;
	/** @type {Phaser.GameObjects.Image} */
	replay_Button;
	/** @type {Phaser.GameObjects.Text} */
	replay_text;

	/* START-USER-CODE */


	// Write your code here

	create() {
		this.editorCreate();
		this.oGameManager = new GameManager(this);
		this.oInputManager = new InputManager(this);
		this.oTweenManager = new TweenManager(this);
		this.startTimer()

		// var music = this.sound.add("starting");
		// music.play();
		// music.setVolume(0.2);
		// music.loop = true;

		//randon animal images
		this.animalCard = new Card(this, 640, 400)
		this.animalCardContainer.add(this.animalCard);
		this.setLevel(this.oGameManager.currentLevel);
	}
	startTimer() {
		this.totalTime = this.oGameManager.totalMiliSec;
		this.timeLeft = this.totalTime;

		this.timerBase = this.add.sprite(1565, 80, "Timer-Base");
		this.timerFill = this.add.sprite(1565 + 61, 80 + 12.5, "Timer-Inner-Fill");
		this.timerMask = this.add.sprite(1565 + 61, 80 + 12.5, "Timer-Inner-Fill");
		this.timerMask.visible = false;
		this.timerFill.mask = new Phaser.Display.Masks.BitmapMask(this, this.timerMask);

		this.gameObjectToFollow = this.add.sprite(this.timerFill.x + 230, this.timerFill.y, "sTimer-Leaf");
		this.gameObjectToFollow.setScale(0.7 , 0.65);
		// Replace with your game object image
		this.container_timer.add(this.timerBase);
		this.container_timer.add(this.timerFill);
		this.container_timer.add(this.timerMask);
		this.container_timer.add(this.gameObjectToFollow);

		this.timerEvent = this.time.addEvent({
			delay: 1,
			callback: () => {
				this.timeLeft--;
				// console.log(this.timeLeft);
				this.stepWidth = this.timerMask.displayWidth / this.totalTime;
				this.timerMask.x -= this.stepWidth;
				this.gameObjectToFollow.x -= this.stepWidth;


				if (this.timeLeft <= 0) {
					this.timerFill.setVisible(false);
					// this.gameObjectToFollow.setVisible(true);
					this.container_popup.visible = true;
					this.oTweenManager.popUpTweenAnimation(this.container_popup)
					this.popup_txt.text = "TimeOut";
					this.next_Button.visible = false;
					this.retry_Button.visible = true;
					this.timerEvent.destroy();
				}
			},
			callbackScope: this,
			loop: true
		});
	}
	restartTimer() {
		this.startTimer.call(this);
	}
	setLevel(level) {
		console.log("level", level);
		switch (level) {
			case 1:
				console.log("Level1");
				this.animalNameFiles = ['dog1'];
				this.oGameManager.totalMiliSec = 1.5 * 300;
				this.animalCard.setAnimalImages(this.animalNameFiles[0]);
				this.setAlphabetsOnPrefab(this.animalNameFiles[0]);
				break;
			case 2:
				this.oGameManager.totalMiliSec = 1.5 * 300;
				this.animalNameFiles = ['pig'];
				this.animalCard.setAnimalImages(this.animalNameFiles[0]);
				this.setAlphabetsOnPrefab(this.animalNameFiles[0]);
				break;
			case 3:
				this.oGameManager.totalMiliSec = 1.5 * 300;
				this.animalNameFiles = ['fox'];
				this.animalCard.setAnimalImages(this.animalNameFiles[0]);
				this.setAlphabetsOnPrefab(this.animalNameFiles[0]);
				break;
			case 4:
				this.oGameManager.totalMiliSec = 3 * 300;
				this.animalNameFiles = ['duck'];
				this.animalCard.setAnimalImages(this.animalNameFiles[0]);
				this.setAlphabetsOnPrefab(this.animalNameFiles[0]);
				break;
			case 5:
				this.oGameManager.totalMiliSec = 3 * 300;
				this.animalNameFiles = ['lion'];
				this.animalCard.setAnimalImages(this.animalNameFiles[0]);
				this.setAlphabetsOnPrefab(this.animalNameFiles[0]);
				break;
			case 6:
				this.oGameManager.totalMiliSec = 3 * 300;
				this.animalNameFiles = ['panda'];
				this.animalCard.setAnimalImages(this.animalNameFiles[0]);
				this.setAlphabetsOnPrefab(this.animalNameFiles[0]);
				break;
			case 7:
				this.oGameManager.totalMiliSec = 4 * 300;
				this.animalNameFiles = ['chicken'];
				this.animalCard.setAnimalImages(this.animalNameFiles[0]);
				this.setAlphabetsOnPrefab(this.animalNameFiles[0]);
				break;
			case 8:
				this.oGameManager.totalMiliSec = 4 * 300;
				this.animalNameFiles = ['sheep'];
				this.animalCard.setAnimalImages(this.animalNameFiles[0]);
				this.setAlphabetsOnPrefab(this.animalNameFiles[0]);
				break;
			case 9:
				this.oGameManager.totalMiliSec = 4 * 300;
				this.animalNameFiles = ['snail'];
				this.animalCard.setAnimalImages(this.animalNameFiles[0]);
				this.setAlphabetsOnPrefab(this.animalNameFiles[0]);
				break;
			case 10:
				this.oGameManager.totalMiliSec = 4 * 300;
				this.animalNameFiles = ['turtle'];
				this.animalCard.setAnimalImages(this.animalNameFiles[0]);
				this.setAlphabetsOnPrefab(this.animalNameFiles[0]);
				break;
			default:
				console.log("default");
				this.oTweenManager.popUpTweenAnimation(this.container_popup);
				this.popup_txt.text = "wellDone";
				this.retry_Button.visible = true;
				this.next_Button.visible = false;
				// this.scene.start()
				break;
		}
	}
	setAlphabetsOnPrefab(animalName) {
		console.log("animal", animalName);
		switch (animalName) {
			case "chicken":
				this.animalAlphabet = ['C', 'H', 'I', 'C', 'K', "E", "N"];
				this.changeAlphabetOnPrefab(this.animalAlphabet);
				break;
			case "duck":
				this.animalAlphabet = ['D', 'U', 'C', 'K'];
				this.changeAlphabetOnPrefab(this.animalAlphabet);
				break;
			case "dog1":
				this.animalAlphabet = ['D', 'O', 'G'];
				this.changeAlphabetOnPrefab(this.animalAlphabet);
				break;
			case "fox":
				this.animalAlphabet = ['F', 'O', 'X'];
				this.changeAlphabetOnPrefab(this.animalAlphabet);
				break;
			case "lion":
				this.animalAlphabet = ['L', 'I', 'O', 'N'];
				this.changeAlphabetOnPrefab(this.animalAlphabet);
				break;
			case "panda":
				this.animalAlphabet = ['P', 'A', 'N', 'D', 'A'];
				this.changeAlphabetOnPrefab(this.animalAlphabet);
				break;
			case "pig":
				this.animalAlphabet = ['P', 'I', 'G'];
				this.changeAlphabetOnPrefab(this.animalAlphabet);
				break;
			case "sheep":
				this.animalAlphabet = ['S', 'H', 'E', 'E', 'P'];
				this.changeAlphabetOnPrefab(this.animalAlphabet);
				break;
			case "snail":
				this.animalAlphabet = ['S', 'N', 'A', 'I', 'L'];
				this.changeAlphabetOnPrefab(this.animalAlphabet);
				break;
			case "turtle":
				this.animalAlphabet = ['T', 'U', 'R', 'T', 'L', 'E'];
				this.changeAlphabetOnPrefab(this.animalAlphabet);
				break;
			default:
				break;
		}
	}
	randomValue(a) {
		return Phaser.Math.Between(a[0], a[1]);
	}
	changeAlphabetOnPrefab(words) {
		console.log("words", words);
		this.holderContainer.removeAll(true);
		this.alphabetContainer.removeAll(true);
		this.holderArr = [];
		switch (words.length) {
			case 7:
				this.startX = 130;
				break;
			case 3:
				this.startX = 500;
				break;
			case 5:
				this.startX = 330;
				break;
			case 4:
				this.startX = 430;
				break;
			default:
				break;
		}
		// Adjust the x starting position as needed
		const startY = 950; // Adjust the y starting position as needed
		const spacingX = 160; // Adjust the horizontal spacing between instances
		this.usedPositions = [];
		for (let i = 0; i < words.length; i++) {
			const xPosition = this.startX + i * spacingX; // Calculate x position based on index and spacing
			const yPosition = startY;
			let x, y;
			do {
				x = Math.floor(Math.random() * (1725 - 1365 + 1) + 1365);
				y = Math.floor(Math.random() * (890 - 400 + 1) + 400);
			} while (this.isPositionUsed(x, y));
			this.alphabetPrefab = new Alphabet(this, x, y);
			this.alphabetContainer.add(this.alphabetPrefab);
			this.usedPositions.push({ x, y });

			this.alphabetHolder = new Holder(this, xPosition, yPosition);
			this.alphabetHolder.settext(words[i]);
			console.log(this.alphabetHolder);
			this.alphabetHolder.holderText.setName(words[i]);
			this.holderContainer.add(this.alphabetHolder);
			this.alphabetPrefab.setAlphabetData(words[i], this.alphabetHolder);
		}
		this.holderContainer.list[this.holderContainer.list.length - 1].wodden_Stick_1.visible = false;
	}
	isPositionUsed(x, y) {
		let minimumSpacingX = 100;
		let minimumSpacingY = 150;
		// Check if the position (x, y) is too close to any used positions
		for (const pos of this.usedPositions) {
			const dx = Math.abs(x - pos.x);
			const dy = Math.abs(y - pos.y);
			if (dx < minimumSpacingX && dy < minimumSpacingY) {
				return true; // Position is too close to an existing one
			}
		}
		return false; // Position is not used
	}
	update() {

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
