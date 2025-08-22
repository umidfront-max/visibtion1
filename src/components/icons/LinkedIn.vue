<style scoped>
.linkedin-btn {
	background: transparent;
	position: relative;
	padding: 12px 24px;
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-size: 16px;
	font-weight: 600;
	text-decoration: none;
	cursor: pointer;
	border: 2px solid #0077b5;
	border-radius: 25px;
	outline: none;
	overflow: hidden;
	color: #0077b5;
	transition: all 0.3s ease;
	text-align: center;
	min-width: 160px;
	justify-content: center;
	font-family: inherit;
	z-index: 1;
}

.linkedin-btn::before {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	width: 0;
	height: 0;
	background: #0077b5;
	border-radius: 25px;
	transform: translate(-50%, -50%);
	transition: all 0.4s ease-out;
	z-index: -1;
}

.linkedin-btn:hover::before {
	width: 400px;
	height: 400px;
}

.linkedin-btn:hover {
	color: #ffffff;
	border-color: #0077b5;
}

.linkedin-icon {
	height: 20px;
	width: 20px;
	fill: currentColor;
	z-index: 2;
	position: relative;
}

.button-text {
	z-index: 2;
	position: relative;
}

/* Demo container */
.demo-container {
	text-align: center;
	padding: 2rem;
}

h1 {
	color: #1c1e21;
	margin-bottom: 2rem;
	font-size: 1.5rem;
}

.button-variations {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
}

/* Filled version */
.linkedin-btn.filled {
	background: #0077b5;
	color: #ffffff;
	border-color: #0077b5;
}

.linkedin-btn.filled::before {
	background: #005582;
}

/* Large version */
.linkedin-btn.large {
	padding: 16px 32px;
	font-size: 18px;
	min-width: 200px;
	border-radius: 35px;
}

.linkedin-btn.large .linkedin-icon {
	height: 24px;
	width: 24px;
}

.linkedin-btn.large::before {
	border-radius: 35px;
}

/* Small version */
.linkedin-btn.small {
	padding: 8px 16px;
	font-size: 14px;
	min-width: 120px;
	border-radius: 20px;
}

.linkedin-btn.small .linkedin-icon {
	height: 16px;
	width: 16px;
}

.linkedin-btn.small::before {
	border-radius: 20px;
}
</style>
<template>
	<button
		class="linkedin-btn"
		onclick="alert('Large LinkedIn clicked!')"
	>
		<svg
			class="linkedin-icon"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
		>
			<path
				d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"
			/>
		</svg>
		<span class="button-text">Sign in with LinkedIn</span>
	</button>
</template>
