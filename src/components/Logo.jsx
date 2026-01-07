export default function Logo() {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="blueGradient"
          x1="256"
          y1="50"
          x2="256"
          y2="450"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stop-color="#00C6FF" />{" "}
          <stop offset="50%" stop-color="#0072FF" />{" "}
          <stop offset="100%" stop-color="#6A00F4" />{" "}
        </linearGradient>

        <linearGradient id="silverGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#F0F0F0" />
          <stop offset="30%" stop-color="#D9D9D9" />
          <stop offset="50%" stop-color="#FFFFFF" />{" "}
          <stop offset="70%" stop-color="#B0B0B0" />
          <stop offset="100%" stop-color="#808080" />
        </linearGradient>

        <linearGradient id="silverDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#E0E0E0" />
          <stop offset="100%" stop-color="#999999" />
        </linearGradient>
      </defs>

      <path
        d="M256 40 L440 460 L330 460 L256 250 L182 460 L72 460 Z"
        fill="url(#blueGradient)"
        stroke="none"
      />

      <path
        d="M60 120 L130 110 L130 200 L110 240 L80 240 L80 360 L120 360 L140 400 L60 460 V120Z"
        fill="url(#silverGradient)"
        stroke="#A0A0A0"
        stroke-width="1"
      />

      <path
        d="M60 120 L130 110 L130 200"
        fill="none"
        stroke="white"
        stroke-width="2"
        opacity="0.6"
      />

      <path
        d="M240 250 L460 230 L470 280 L460 350 L400 350 L380 320 L240 320 Z"
        fill="url(#silverGradient)"
        stroke="#A0A0A0"
        stroke-width="1"
      />

      <path
        d="M420 200 L450 160 L490 160"
        stroke="#D0D0D0"
        stroke-width="6"
        fill="none"
        stroke-linecap="round"
      />
      <circle
        cx="490"
        cy="160"
        r="12"
        stroke="#D0D0D0"
        stroke-width="4"
        fill="none"
      />

      <path
        d="M380 200 L420 200 L450 200"
        stroke="#D0D0D0"
        stroke-width="6"
        fill="none"
        stroke-linecap="round"
      />
      <circle
        cx="450"
        cy="200"
        r="12"
        stroke="#D0D0D0"
        stroke-width="4"
        fill="none"
      />
    </svg>
  );
}
