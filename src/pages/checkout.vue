<template>
	<div class="min-h-screen gradient-bg flex max-lg:flex-col justify-end">
		<div class="text-white p-8 lg:p-10">
			<router-link
				to="/"
				class="!text-purple-600 flex gap-2 font-bold text-2xl"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-7"
				>
					<path
						d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"
					></path>
				</svg>
				<span> LOGO </span>
			</router-link>

			<!-- Title and Price -->
			<div class="my-10">
				<h2 class="text-lg opacity-90 mb-3">Subscribe to Pro Plan</h2>
				<div class="flex items-center">
					<p class="text-5xl font-light">${{ totalPrice.toFixed(2) }}</p>
					<div>
						<p class="text-base opacity-80 ml-2">per</p>
						<p class="text-base opacity-80 ml-2">month</p>
					</div>
				</div>
			</div>

			<!-- Plan Details -->
			<div class="">
				<div class="flex gap-6">
					<div>
						<div class="flex border-b border-white/30 pb-6">
							<div class="flex-1 text-white">
								<div class="font-semibold mb-1">Pro Plan</div>
								<div class="text-sm opacity-80 w-6/7 leading-relaxed">
									Create unlimited sites, Custom domain, Publish posts,
									and more
								</div>
								<div class="text-sm opacity-80 mt-2">
									Billed monthly
								</div>
							</div>
							<div class="font-semibold">
								${{ originalPrice.toFixed(2) }}
							</div>
						</div>

						<!-- Subtotal -->
						<div
							class="flex justify-between items-center text-base font-semibold my-6"
						>
							<span>Subtotal</span>
							<span>${{ originalPrice.toFixed(2) }}</span>
						</div>

						<!-- Promo Code -->
						<div class="mb-6 flex relative">
							<input
								v-model="promoCode"
								type="text"
								placeholder="Add promotion code"
								class="w-full p-3 rounded-md !bg-white bg-opacity-90 text-gray-800 !placeholder-gray-500 border-0 focus:!outline-none focus:ring-6 focus:!ring-white/30 focus:!ring-opacity-50"
							/>
							<button
								@click="applyPromo"
								class="px-4 absolute right-0 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
							>
								Apply
							</button>
						</div>

						<p v-if="promoMessage" class="text-red-300 text-sm mb-3">
							{{ promoMessage }}
						</p>

						<!-- Total -->
						<div
							class="flex justify-between items-center font-semibold border-t border-white border-opacity-20 pt-5"
						>
							<span>Total due today</span>
							<span>${{ totalPrice.toFixed(2) }}</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Right Panel -->
		<div class="bg-gray-50 p-8 lg:p-10 m max-w-[700px] max-lg:max-w-full w-full">
			<div class="pr-40 w-full max-sm:pr-0">
				<!-- Contact Information -->
				<h3 class="text-lg font-semibold text-black/70 mb-4">
					Contact information
				</h3>

				<div class="mb-6">
					<label class="block text-sm font-medium text-gray-600 mb-2"
						>Email</label
					>
					<input
						type="email"
						:value="email"
						readonly
						class="w-full p-3 !bg-gray-200 text-gray-600 rounded-md !border !border-gray-200 cursor-not-allowed"
					/>
				</div>

				<!-- Payment Method -->
				<div class="mb-6">
					<label class="block text-sm font-semibold text-black/70 mb-4"
						>Payment method</label
					>

					<div class="space-y-3">
						<!-- Card Information -->
						<div class="border border-black/10 rounded-lg">
							<div class="p-5">
								<div
									@click="paymentMethod = 'card'"
									:class="[
										'flex items-center rounded-md cursor-pointer transition-all border-gray-200 hover:border-gray-300',
									]"
								>
									<input
										type="radio"
										v-model="paymentMethod"
										value="card"
										class="mr-3"
									/>
									<span class="mr-3 text-xl">
										<img
											class="w-5"
											src="@/assets/img/credit-card.png"
											alt=""
										/>
									</span>
									<span class="font-medium">Card</span>
								</div>

								<div class="space-y-4 mb-6">
									<p
										class="block text-sm font-medium text-gray-600 my-2"
									>
										Card information
									</p>
									<div class="rounded-lg border border-black/20">
										<div class="relative">
											<input
												v-model="cardNumber"
												@input="formatCardNumber"
												type="text"
												placeholder="1234 1234 1234 1234"
												maxlength="19"
												class="w-full p-3 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 pr-20"
											/>
											<div
												class="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1"
											>
												<img
													class="w-8"
													src="@/assets/img/visa.svg"
													alt=""
												/>
												<img
													class="w-8"
													src="@/assets/img/mastercard.svg"
													alt=""
												/>
											</div>
										</div>
										<div
											class="grid grid-cols-2 gap-4 border-t border-black/20"
										>
											<div>
												<input
													v-model="expiryDate"
													@input="formatExpiry"
													type="text"
													placeholder="MM / YY"
													maxlength="7"
													class="w-full p-3 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
												/>
											</div>
											<div class="relative border-l border-black/20">
												<input
													v-model="cvc"
													@input="formatCVC"
													type="text"
													placeholder="CVC"
													maxlength="4"
													class="w-full p-3 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500 pr-8"
												/>
												<span
													class="absolute right-3 top-1/2 transform -translate-y-1/2 rounded-full text-white text-xs flex items-center justify-center"
												>
													<img
														class="w-6"
														src="@/assets/img/cvv.png"
														alt=""
													/>
												</span>
											</div>
										</div>
									</div>

									<div>
										<label
											class="block text-sm font-medium text-gray-600 mb-2"
											>Cardholder name</label
										>
										<input
											v-model="cardholderName"
											type="text"
											placeholder="Full name on card"
											class="w-full p-3 !border-2 !border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
										/>
									</div>
									<!-- Country -->
									<div class="mb-6">
										<label
											class="block text-sm font-medium text-gray-600 mb-2"
											>Country or region</label
										>
										<select
											v-model="country"
											class="w-full p-3 text-gray-600 !border-2 !border-gray-200 rounded-md"
										>
											<option value="uz" class="bg-white text-black">
												🇺🇿 Uzbekistan
											</option>
											<option value="us" class="bg-white text-black">
												🇺🇸 United States
											</option>
											<option value="uk" class="bg-white text-black">
												🇬🇧 United Kingdom
											</option>
											<option value="de" class="bg-white text-black">
												🇩🇪 Germany
											</option>
										</select>
									</div>
								</div>
							</div>
							<div
								@click="paymentMethod = 'bank'"
								:class="[
									'flex items-center rounded-md cursor-pointer transition-all p-5 py-3 border-t border-gray-200 hover:border-gray-300',
								]"
							>
								<input
									type="radio"
									v-model="paymentMethod"
									value="bank"
									class="mr-3"
								/>
								<span class="mr-3 text-lg">🏦</span>
								<span class="font-medium">Bank</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Save Info Checkbox -->
				<div
					@click="saveInfo = !saveInfo"
					class="flex items-start !cursor-pointer border rounded-lg px-3 py-2 border-gray-300 space-x-3 mb-8"
				>
					<input
						v-model="saveInfo"
						type="checkbox"
						class="mt-1 h-4 cursor-pointer w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
					/>
					<label
						class="text-sm cursor-pointer text-gray-600 leading-relaxed"
					>
						<span class="text-black/80"
							>Save my information for faster checkout</span
						><br />
						Pay faster on Bio Link and everywhere Link is accepted.
					</label>
				</div>

				<!-- Pay Button -->
				<button
					@click="processPayment"
					class="w-full bg-black/80 flex justify-center  cursor-pointer text-white py-4 rounded-md font-semibold hover:bg-black/80 transition-colors mb-4"
				>
					<span v-if="!loading"> Pay and subscribe</span>
					<Loader v-else />
				</button>

				<!-- Terms -->
				<p class="text-xs text-gray-500 text-center leading-relaxed mb-5">
					By subscribing, you authorize Bio Link to charge you according
					to<br />
					the terms until you cancel.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import Loader from "@/components/Loader.vue";
import { useRouter } from "vue-router";

const promoCode = ref("");
const promoMessage = ref("");
const originalPrice = ref(7.0);
const totalPrice = ref(originalPrice.value);

const email = ref("@gmail.com");
const paymentMethod = ref("card");
const cardNumber = ref("");
const expiryDate = ref("");
const cvc = ref("");
const cardholderName = ref("");
const country = ref("uz");
const saveInfo = ref(false);
const loading = ref(false);
const router = useRouter()
const applyPromo = () => {
	if (promoCode.value === "333") {
		totalPrice.value = originalPrice.value * 0.8; // 20% off
		promoMessage.value = "Promo code applied! You got 20% off.";
	} else {
		totalPrice.value = originalPrice.value;
		promoMessage.value = "This promo code does not exist.";
	}
};

const formatCardNumber = (event) => {
	let value = event.target.value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
	let formattedValue = "";

	for (let i = 0; i < value.length; i++) {
		if (i > 0 && i % 4 === 0) {
			formattedValue += " ";
		}
		formattedValue += value[i];
	}

	cardNumber.value = formattedValue;
	event.target.value = formattedValue;
};

const formatExpiry = (event) => {
	let value = event.target.value.replace(/\D/g, "");
	let formattedValue = "";

	if (value.length >= 2) {
		formattedValue = value.substring(0, 2) + " / " + value.substring(2, 4);
	} else {
		formattedValue = value;
	}

	expiryDate.value = formattedValue;
	event.target.value = formattedValue;
};

const formatCVC = (event) => {
	let value = event.target.value.replace(/\D/g, "");
	cvc.value = value;
	event.target.value = value;
};

const processPayment = () => {
	loading.value = true;
	setTimeout(() => {
		loading.value = false;
		router.push("/dashboard");
	}, 1500);
	// alert(
	// 	"Payment processing... (Demo)\n\n" +
	// 		`Card: ${cardNumber.value}\n` +
	// 		`Expiry: ${expiryDate.value}\n` +
	// 		`CVC: ${cvc.value}\n` +
	// 		`Name: ${cardholderName.value}\n` +
	// 		`Total: $${totalPrice.value.toFixed(2)}`
	// );
};
</script>

<style scoped>
.gradient-bg {
	background: linear-gradient(135deg, #1e90ff 0%, #0066cc 100%);
}
</style>
