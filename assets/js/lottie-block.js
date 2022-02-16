const qubelyLottieData = (dataSet) => {
	const mode = dataSet.type != undefined ? dataSet.type : "viewport";

	let lottieData = {};
	const frame_start = dataSet.frame_start != undefined ? parseInt(dataSet.frame_start) : 0;
	const frame_end = dataSet.frame_end != undefined ? parseInt(dataSet.frame_end) : 100;

	switch (mode) {
		case "scroll":
			lottieData = {
				mode: "scroll",
				actions: [
					{
						visibility: [
							dataSet.viewport_top != undefined ? parseFloat(dataSet.viewport_top) : 0,
							dataSet.viewport_bottom != undefined ? parseFloat(dataSet.viewport_bottom) : 1,
						],
						type: "seek",
						frames: [frame_start, frame_end],
					},
				],
			};
			break;

		case "hover":
			lottieData = {
				mode: "cursor",
				actions: [
					{
						position: { x: [0, 1], y: [0, 1] },
						type: "loop",
						frames: [frame_start, frame_end],
					},
					{
						position: { x: -1, y: -1 },
						type: "stop",
						frames: [0],
					},
				],
			};
			break;

		case "click":
			lottieData = {
				mode: "cursor",
				actions: [
					{
						type: "toggle",
						frames: [frame_start, frame_end],
					},
				],
			};
			break;

		default:
			lottieData = {
				mode: "scroll",
				actions: [
					{
						visibility: [
							dataSet.viewport_top != undefined ? parseFloat(dataSet.viewport_top) : 0,
							dataSet.viewport_bottom != undefined ? parseFloat(dataSet.viewport_bottom) : 1,
						],
						type: "play",
						frames: [frame_start, frame_end],
					},
				],
			};
	}

	return lottieData;
};

function createQubelyLottie(elementId = "", dataSet = []) {
	if (!elementId) {
		console.error("Element Id is missing");
		return;
	}

	LottieInteractivity.create({
		player: `#${elementId}`,
		...qubelyLottieData(dataSet),
	});
}

window.addEventListener("DOMContentLoaded", (event) => {
	const qubelyLottiePlayers = document.querySelectorAll(".qubely-lottie-player");
	qubelyLottiePlayers.forEach((lottiePlayer) => {
		const lottiePlayerId = lottiePlayer.id;
		const dataSet = lottiePlayer.dataset;
		if (lottiePlayerId && dataSet) {
			createQubelyLottie(lottiePlayerId, dataSet);
		}
	});
});
