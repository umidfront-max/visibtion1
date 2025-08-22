<style scoped>
.google-btn {
	background: transparent;
	position: relative;
	padding: 12px 24px;
	display: inline-flex;
	align-items: center;
	gap: 8px;
	font-size: 16px;
	font-weight: 500;
	text-decoration: none;
	cursor: pointer;
	border: 2px solid #f8f9fa;
	border-radius: 35px;
	outline: none;
	overflow: hidden;
	color: #f8f9fa;
	transition: all 0.3s ease;
	text-align: center;
	min-width: 160px;
	justify-content: center;
	font-family: inherit;
	z-index: 1;
}

.google-btn::before {
	content: "";
	position: absolute;
	top: 50%;
	left: 50%;
	width: 0;
	height: 0;
	background: #f8f9fa;
	border-radius: 8px;
	transform: translate(-50%, -50%);
	transition: all 0.4s ease-out;
	z-index: -1;
}

.google-btn:hover::before {
	width: 400px;
	height: 400px;
}

.google-btn:hover {
	color: #ffffff;
	border-color: #f8f9fa;
}

.google-icon {
	height: 20px;
	width: 20px;
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

/* Gray border version (Google style) */
.google-btn.gray {
	border-color: #dadce0;
	color: #3c4043;
}

.google-btn.gray::before {
	background: #f8f9fa;
}

.google-btn.gray:hover {
	color: #1a73e8;
	border-color: #1a73e8;
}

.google-btn.gray:hover::before {
	background: #ecedef;
}

.google-btn.gray:hover {
	color: #1c1e21;
}

/* Filled version */
.google-btn.filled {
	background: #4285f4;
	color: #ffffff;
	border-color: #4285f4;
}

.google-btn.filled::before {
	background: #3367d6;
}

/* Large version */
.google-btn.large {
	padding: 16px 32px;
	font-size: 18px;
	min-width: 200px;
	border-radius: 12px;
}

.google-btn.large .google-icon {
	height: 24px;
	width: 24px;
}

.google-btn.large::before {
	border-radius: 12px;
}

/* Small version */
.google-btn.small {
	padding: 8px 16px;
	font-size: 14px;
	min-width: 120px;
	border-radius: 6px;
}

.google-btn.small .google-icon {
	height: 16px;
	width: 16px;
}

.google-btn.small::before {
	border-radius: 35px;
}

/* White version (official Google style) */
.google-btn.white {
	background: #ffffff;
	border: 1px solid #dadce0;
	color: #3c4043;
	box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
		0 1px 3px 1px rgba(60, 64, 67, 0.15);
}

.google-btn.white:hover {
	box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3),
		0 4px 8px 3px rgba(60, 64, 67, 0.15);
	background: #f8f9fa;
}

.google-btn.white::before {
	background: #1a73e8;
}

.google-btn.white:hover {
	color: #ffffff;
}
</style>

<template>
	<button class="google-btn gray" onclick="alert('Gray Google clicked!')">
		<svg
			class="google-icon"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill="#4285F4"
				d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
			/>
			<path
				fill="#34A853"
				d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
			/>
			<path
				fill="#FBBC05"
				d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
			/>
			<path
				fill="#EA4335"
				d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
			/>
		</svg>
		<span class="button-text">Continue with Google</span>
	</button>
</template>
