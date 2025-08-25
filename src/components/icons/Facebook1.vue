<style scoped>
.facebook-btn {
	background: #1877f2;
	position: relative;
	padding: 12px 24px;
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-size: 16px;
	font-weight: 600;
	text-decoration: none;
	cursor: pointer;
	border: none;
	border-radius: 8px;
	outline: none;
	overflow: hidden;
	color: #ffffff;
	transition: all 0.3s ease;
	text-align: center;
	min-width: 160px;
	justify-content: center;
	font-family: inherit;
	z-index: 1;
}

.facebook-btn::before {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	width: 0;
	height: 0;
	background: #166fe5;
	border-radius: 8px;
	transform: translate(-50%, -50%);
	transition: all 0.4s ease-out;
	z-index: -1;
}

.facebook-btn:hover::before {
	width: 400px;
	height: 400px;
}

.facebook-icon {
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

/* Outlined version with center animation */
.facebook-btn.outlined {
	background: transparent;
	border: 2px solid #1877f2;
	color: #1877f2;
}

.facebook-btn.outlined::before {
	background: #1877f2;
}

.facebook-btn.outlined:hover {
	color: white;
}

/* Large version */
.facebook-btn.large {
	padding: 16px 32px;
	font-size: 18px;
	min-width: 200px;
	border-radius: 8px;
}

.facebook-btn.large .facebook-icon {
	height: 24px;
	width: 24px;
}

/* Extra smooth version */
.facebook-btn.smooth::before {
	transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	background: linear-gradient(45deg, #166fe5, #1464d0);
}

/* Alternative color version */
.facebook-btn.dark {
	background: #4267b2;
}

.facebook-btn.dark::before {
	background: linear-gradient(45deg, #365899, #29487d);
}
</style>

<template>
	<button
		class="facebook-btn outlined"
		onclick="alert('Outlined Facebook clicked!')"
	>
		<svg
			class="facebook-icon"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"
			/>
		</svg>
		<span class="button-text">{{ text }}</span>
	</button>
</template>

<script setup>
defineProps({
	text: {
		type: String,
		default: () => "Continue with Facebook",
	},
});
</script>
