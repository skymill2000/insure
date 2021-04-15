	public static String encrypt(String plainStr, String secureKey) throws Exception {
        secretKey = app secretKey + timestapme
		secureKey = StringUtil.rpad(secureKey, AES256CipherUtil.KEY_BYTE_SIZE, "0");
		SecureRandom random = new SecureRandom();
		byte bytes[] = new byte[20];
		random.nextBytes(bytes);
		// Password-Based Key Derivation function 2
		SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
		// 70000번 해시하여 256 bit 길이의 키를 만든다.
		PBEKeySpec spec = new PBEKeySpec(secureKey.toCharArray(), bytes, 70000, 256);
		SecretKey secretKey = factory.generateSecret(spec);
		SecretKeySpec secret = new SecretKeySpec(secretKey.getEncoded(), "AES");
		// 알고리즘/모드/패딩
		// CBC : Cipher Block Chaining Mode
		Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
		cipher.init(Cipher.ENCRYPT_MODE, secret);
		AlgorithmParameters params = cipher.getParameters();
		// Initial Vector(1단계 암호화 블록용)
		byte[] ivBytes = params.getParameterSpec(IvParameterSpec.class).getIV();
		byte[] encryptedTextBytes = cipher.doFinal(plainStr.getBytes(StandardCharsets.UTF_8));
		byte[] buffer = new byte[bytes.length + ivBytes.length + encryptedTextBytes.length];
		System.arraycopy(bytes, 0, buffer, 0, bytes.length);
		System.arraycopy(ivBytes, 0, buffer, bytes.length, ivBytes.length);
		System.arraycopy(encryptedTextBytes, 0, buffer, bytes.length + ivBytes.length, encryptedTextBytes.length);
		return Base64.encode(buffer);
	}