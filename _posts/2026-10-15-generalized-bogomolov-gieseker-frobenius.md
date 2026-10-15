---
layout: paper
title: Generalized Bogomolov--Gieseker inequalities via Frobenius
title_ja: Frobeniusを用いた一般化Bogomolov–Gieseker不等式
authors: Chunyi Li, Zhiyu Liu, Alexander Perry, Xiaolei Zhao
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We establish a Bogomolov--Gieseker-type inequality for tilt-semistable objects on smooth projective varieties of dimension $\geq 3$, in the spirit of the Bayer--Macr\`i--Toda conjecture. A key ingredient is an analysis of the action of the Frobenius morphism on tilt-semistable objects. As an application, we prove the Castelnuovo Bound Conjecture, up to an explicit constant term. Combining our results with work of Feyzbakhsh and Thomas, we further show that on a Calabi--Yau threefold, arbitrary rank Donaldson--Thomas invariants of semistable sheaves are determined by rank one invariants, and hence are symplectic invariants.
topic: algebraic-geometry
tags:
- chern-classes
- stability
- vector-bundles-sheaves
- calabi-yau-geometry
arxiv_id: 2610.18595v1
arxiv_url: https://arxiv.org/abs/2610.18595
arxiv_submitted: '2026-10-13'
arxiv_updated: '2026-10-13'
summary: 標数0の任意の滑らかな偏極射影多様体で、tilt半安定対象の第3 Chern指標を判別式で制御する不等式を示す。次元3以上に共通する評価から、Calabi–Yau三次元多様体の任意階数DT不変量の階数1への還元と、明示的な定数誤差を伴うCastelnuovo型種数上界を得る。
abstract_en: ''
summary_en: Tilt stability provides a route from Chern character estimates to the geometry of moduli spaces. This paper proves a uniform estimate for the third twisted Chern character in characteristic zero by analyzing reductions in positive characteristic. In dimension three, the estimate removes a conditional hypothesis from the reduction of higher-rank Donaldson–Thomas invariants to rank one. A further application controls curve genera with an explicit additive error, without asserting the error-free conjectural bound.
abstract_ja: 滑らかな射影多様体上のtilt半安定対象に対し、次元3以上で一般化Bogomolov–Gieseker不等式を証明する。正標数への還元とFrobenius引戻しの不安定性の評価を組み合わせ、標数0における一様なChern指標の制約を導く。これによりCalabi–Yau三次元多様体の任意階数DT不変量を階数1の不変量から記述し、そのシンプレクティック不変性を得る。また、Picard数1の場合の曲線の算術種数に、明示的な定数誤差つきの上界を与える。
abstract_source_url: https://arxiv.org/abs/2610.18595
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.18595v1](https://arxiv.org/abs/2610.18595)
- **著者:** Chunyi Li, Zhiyu Liu, Alexander Perry, Xiaolei Zhao
- **初回投稿日:** 2026-10-13
- **最終更新日:** 2026-10-13
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

層の安定性とChern類の数値的制約は、モジュライ空間の構成と数え上げ不変量を結ぶ。三次元では、tilt安定性に対して第3 Chern指標まで含むBayer–Macrì–Toda型不等式が期待されてきたが、最初の形には反例があり、補正項を含む定式化が必要であった。

本論文は、標数0の滑らかな偏極射影多様体の次元が3以上なら、すべてのtilt半安定対象に共通する補正つき不等式を与える。補正は対象ごとに自由に選ぶものではなく、多様体と偏極だけに依存する定数と判別式の平方根からなる。

三次元への応用として、既存のFeyzbakhsh–Thomasの結果に残っていた不等式の仮定を除き、任意の非負階数の一般化Donaldson–Thomas不変量を階数1の不変量から計算できることを示す。曲線の種数についても、Castelnuovo予想の二次項と一次項を保った評価を、すべての正の次数に対して得る。ただし定数誤差は残り、誤差なしの予想そのものの証明とは区別される。

## 背景と問題設定

$(X,H)$を標数0の体上の滑らかな偏極射影多様体、$n=\dim X\ge3$とする。$B\in\operatorname{NS}(X)_{\mathbb R}$に対して$\operatorname{ch}^B(E)=e^{-B}\operatorname{ch}(E)$とおき、

$$
\overline\Delta_B^H(E)=(H^{n-1}\cdot\operatorname{ch}_1^B(E))^2-2H^n\operatorname{ch}_0(E)(H^{n-2}\cdot\operatorname{ch}_2^B(E))
$$

を使う。最初のtiltで得られるアーベル圏$\operatorname{Coh}^{H,B}(X)$上の傾きは

$$
\nu_{\alpha,B}^H(E)=\frac{H^{n-2}\cdot\operatorname{ch}_2^B(E)-\frac{\alpha^2}{2}H^n\operatorname{ch}_0(E)}{H^{n-1}\cdot\operatorname{ch}_1^B(E)},\qquad \alpha>0
$$

であり、分母が0なら$+\infty$とする。ここで問題になるのは、この傾きに関する半安定性から第3指標をどこまで抑えられるかである。

## 主結果

### 主定理1（Theorem 1.1）

$(X,H)$だけに依存する$C>0$が存在し、任意の$\alpha>0$、$B$と任意の$\nu_{\alpha,B}^H$半安定対象$E\in\operatorname{Coh}^{H,B}(X)$について

$$
\begin{aligned}
&\alpha^2\overline\Delta_B^H(E)+4(H^{n-2}\cdot\operatorname{ch}_2^B(E))^2\\
&\quad-6(H^{n-1}\cdot\operatorname{ch}_1^B(E))\left(H^{n-3}\cdot\operatorname{ch}_3^B(E)-C\sqrt{\overline\Delta_B^H(E)}\right)\ge0
\end{aligned}
$$

が成り立つ。これは第3指標の大きさを低次指標から一様に制約する。$\Gamma=CH^{n-1}$とすれば、既存の$\Gamma$-BMT予想の二次形式は上式の左辺に非負項を加えたものとなり、その予想を含意する（Corollary 1.2）。

### 主定理2（Theorem 1.3とCorollary 1.4）

偏極Calabi–Yau三次元多様体$(X,H)$と$\operatorname{rk}(v)\ge0$の数値的$K$類に対して、Gieseker半安定層を数える一般化DT不変量は

$$
\operatorname{DT}_H(v)=F_1\bigl(\operatorname{DT}_H(\alpha_1),\operatorname{DT}_H(\alpha_2),\ldots\bigr),\qquad \operatorname{rk}(\alpha_i)=1
$$

という普遍多項式で表される。さらに$[\omega_i]=H_i$を満たすKähler形式を備えた二つの偏極Calabi–Yau三次元多様体の間のシンプレクティック同型$\varphi$が$\operatorname{ch}(v_1)=\varphi^*\operatorname{ch}(v_2)$を満たすなら、$\operatorname{DT}\_{H_1}(v_1)=\operatorname{DT}\_{H_2}(v_2)$となる。先行研究の還元手順を、本論文の不等式によって無条件化する点が要点である。

### 主定理3（Theorem 1.5）

$X$のPicard数を1、$H$をNéron–Severi群の豊富な生成元とする。次数$d>0$、算術種数$g$の任意の1次元閉部分スキームについて、$mH$が非常に豊富となる整数$m\ge1$を取ると

$$
g\le\frac{d^2}{2H^3}+\frac d2+1+660m^{8/3}H^3
$$

が成り立つ。予想される上界は末尾の定数項を除いたものである。従来の大きな次数に対する漸近評価と異なり、ここではすべての$d>0$を扱う。

## 証明の見取り図

まず有理的なパラメータとtilt傾き0の対象に還元し、大きな$\alpha$で知られる弱い不等式を出発点とする。対象を有限生成な基底上に拡げ、正標数$p$のファイバーへ移す。

Sunの標準フィルトレーションを用いると、正規化したFrobenius引戻しのHarder–Narasimhan因子のtilt傾きを制御できる。各因子を傾き0へ移して弱い評価を適用し、項の増大度を比較して$p\to\infty$とすることで標数0の第3指標を評価する。最後に定数を最適化し、すべての$\alpha>0$へ拡張する。これはIntroductionの説明に基づく論理の概略であり、Frobeniusによる安定性保存を無条件に仮定する議論ではない。

## 原論文との対応

- **Abstractページ:** [Generalized Bogomolov--Gieseker inequalities via Frobenius](https://arxiv.org/abs/2610.18595)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.18595v1) — Section 1, pp. 1–4（主結果と証明概略）
- **Introduction中で言及された主要結果:** Theorem 1.1, Corollary 1.2, Theorem 1.3, Corollary 1.4, Theorem 1.5
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.18595v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
