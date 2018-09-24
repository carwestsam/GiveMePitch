# 声音可以表示为某个振幅、频率和初相的正弦波
# 如果我们把钢琴上的键编为 1 ~ 88，
# 那么它的频率就是 440 * 2 ** ((n - 49) / 12)
# 其中 n 是键的编号

import scipy.io.wavfile 
import numpy as np
import matplotlib.pyplot as plt

RATE = 44100 
DTYPE = np.int16

# 生成正弦波 
def generate(freq, amp, duration, phi): 
    t = np.linspace(0, duration, duration * RATE) 
    data = np.sin(2 * np.pi * freq * t + phi) * amp

    return data.astype(DTYPE)

NTONES = 89

for i in range (NTONES):
    duration = 2
    key = i
    freq = 440.0 * 2 ** ((key - 49.)/12.)
    phi = 0.
    amp = 10000.

    tone = np.array([], dtype=DTYPE)
    newtone = generate(freq, amp, duration, phi)
    tone = np.concatenate((tone, newtone))

    print (key, amp, duration, freq, phi)

    scipy.io.wavfile.write('tone'+str(key)+'.wav', RATE, tone)


# # 初始化
# # 弹奏 89 个音符
# NTONES = 89 
# # 振幅是 200 ~ 2000
# amps = 2000. * np.random.random((NTONES,)) + 200. 
# # 时长是 0.01 ~ 0.2
# durations = 0.19 * np.random.random((NTONES,)) + 0.01 
# # 键从 88 个中任取
# keys = np.random.random_integers(1, 88, NTONES) 
# # 频率使用上面的公式生成
# freqs = 440.0 * 2 ** ((keys - 49.)/12.) 
# # 初相是 0 ~ 2 * pi
# phi = 2 * np.pi * np.random.random((NTONES,))

# tone = np.array([], dtype=DTYPE)

# for i in range(NTONES):   
#     # 对于每个音符生成正弦波
#     newtone = generate(freqs[i], amp=amps[i],  duration=durations[i], phi=phi[i])   
#     # 附加到音频后面
#     tone = np.concatenate((tone, newtone))

# # 保存文件
# scipy.io.wavfile.write('generated_tone.wav', RATE, tone)

# # 绘制音频数据
# plt.plot(np.linspace(0, len(tone)/RATE, len(tone)), tone) 
# plt.show()
