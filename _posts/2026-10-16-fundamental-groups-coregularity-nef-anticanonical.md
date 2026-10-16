---
layout: paper
title: 'Fundamental Groups and Coregularity: Klt Pairs with Trivial and Nef Log-Anticanonical Class'
title_ja: 絶対coregularityによるklt対の基本群の階数制御
authors: Lukas Braun, Fernando Figueroa
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: In this article, we study how the absolute coregularity of a projective log pair reflects on its fundamental group. More precisely, we show that for a projective klt log pair $(X,D)$ of absolute coregularity $c$ and arbitrary dimension the fundamental group $\pi_1^{\rm reg}(X,D)$ admits a normal abelian subgroup of finite index and rank at most $2c$. We reduce this statement to klt Calabi-Yau pairs with standard coefficients of dimension $c$. In the cases $0\le c\le2$ and fixed dimension, we can furthermore bound the index of a solvable normal subgroup. Combining the reduction with the recent regular-locus theorem of Fu-Guo-Song-Wang, we prove the coregularity bound in every dimension. In particular, for a projective klt pair $(X,D)$ with $-(K_X+D)$ nef, the orbifold fundamental group of the smooth locus is virtually abelian of rank at most $2\, {\rm dim}X$.
topic: algebraic-geometry
tags:
- fundamental-groups
- singularities
- positivity
- calabi-yau-geometry
- uniformization
arxiv_id: 2610.21358v1
arxiv_url: https://arxiv.org/abs/2610.21358
arxiv_submitted: '2026-10-15'
arxiv_updated: '2026-10-15'
summary: 一般化lc Calabi–Yau completionを持つ射影klt対について、正則部分のorbifold基本群が有限指数の自由可換正規部分群を持つことを示す。その階数を絶対coregularityの2倍で抑え、nefな対数反標準類を持つ対の基本群と一意化へ応用する。
abstract_en: In this article, we study how the absolute coregularity of a projective log pair reflects on its fundamental group. More precisely, we show that for a projective klt log pair $(X,D)$ of absolute coregularity $c$ and arbitrary dimension the fundamental group $\pi_1^{\rm reg}(X,D)$ admits a normal abelian subgroup of finite index and rank at most $2c$. We reduce this statement to klt Calabi-Yau pairs with standard coefficients of dimension $c$. In the cases $0\le c\le2$ and fixed dimension, we can furthermore bound the index of a solvable normal subgroup. Combining the reduction with the recent regular-locus theorem of Fu-Guo-Song-Wang, we prove the coregularity bound in every dimension. In particular, for a projective klt pair $(X,D)$ with $-(K_X+D)$ nef, the orbifold fundamental group of the smooth locus is virtually abelian of rank at most $2\, {\rm dim}X$.
summary_en: ''
abstract_ja: 絶対coregularityを用い、射影klt対のregional基本群の仮想可換性と階数を制御する。一般化lc Calabi–Yau completionを持つ場合、有限指数自由可換正規部分群の階数は絶対coregularityの2倍以下となる。特に対数反標準因子がnefなら次元の2倍以下であり、低coregularityでは可解部分群の指数にも一様な評価を得る。被覆と一意化の応用では、境界の分岐が階数に与える影響を明示する。
abstract_source_url: https://arxiv.org/abs/2610.21358
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.21358v1](https://arxiv.org/abs/2610.21358)
- **著者:** Lukas Braun, Fernando Figueroa
- **初回投稿日:** 2026-10-15
- **最終更新日:** 2026-10-15
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

滑らかなFano多様体の単連結性や、標準類が自明または反nefである射影多様体の基本群の仮想可換性を、特異点と境界を持つ対へ拡張する問題を扱う。特異多様体全体の基本群と、その正則部分の基本群は異なるため、後者を制御するには追加の議論が必要となる。

本論文は、絶対coregularityという双対複体に由来する不変量を使い、基本群の自由可換部分の階数を抑える。一般化lc Calabi–Yau completionを持つ射影klt対で、この階数は絶対coregularityの2倍以下となる。特に対数反標準因子がnefである場合を含む。

中心となるのは、一般の次元の問題を、coregularityに等しい次元の標準係数Calabi–Yau対へ帰着する方法である。近年の正則部分の基本群に関する結果を組み合わせ、全次元の結論を得る。低coregularityでは可解正規部分群の指数の一様評価も成立する。

また、境界付きorbifold被覆は台多様体の非正則性だけでは見えない自由可換成分を生み得る。この点を踏まえて以前の原稿の階数評価を修正し、nefな反標準類を持つ台多様体の正則部分について、階数と普遍被覆の構造を精密化している。

## 背景と問題設定

対象は複素数体上の連結正規射影多様体と有理境界$D$であり、$(X,D)$をklt対とする。regional基本群は、$D$の標準係数近似$D\_{\mathrm{st}}$を使い

$$
\pi\_1^{\mathrm{reg}}(X,D)=\pi\_1^{\mathrm{orb}}(X\_{\mathrm{reg}},D\_{\mathrm{st}}|\_{X\_{\mathrm{reg}}})
$$

と定める。仮想階数$r$とは有限指数部分群が$\mathbb Z^r$となるときの整数である。

一般化lc Calabi–Yau completionとは、$B\ge D$とb-nefかつb-$\mathbb Q$-Cartierな因子$M$を選び、$(X,B,M)$が一般化lc、$K\_X+B+M\_X\sim\_{\mathbb Q}0$となる構造をいう。その双対複体の次元に関係するcoregularityを、こうした構造全体で最小化した絶対coregularityを$c$と記す。以下ではこの不変量が有限となるcompletionの存在を前提とする。

## 主結果

### 主定理1（Theorem 1：次元の帰着）

次元$c$の標準係数を持つ射影klt Calabi–Yau対で、regional基本群が階数$2c$以下の仮想可換群になると仮定する。このとき絶対coregularityが$a\le c$の任意の射影klt対でも、階数は$2a$以下となる。高次元の対を、その次元自体より小さな不変量で制御する帰着である。

### 主定理2（Theorem 2：全次元の結論）

一般化lc Calabi–Yau completionを持つ射影klt対に対し、

$$
\mathbb Z^r\triangleleft\pi\_1^{\mathrm{reg}}(X,D),
\qquad [\pi\_1^{\mathrm{reg}}(X,D):\mathbb Z^r]<\infty,
\qquad r\le2c
$$

となる自由可換正規部分群が存在する。したがって$c=0$なら基本群は有限である。Theorem 1の仮定は、Fu–Guo–Song–Wangの正則部分の定理とlog index-one coverによって全次元で満たされる。

### 主定理3（Theorem 3：Calabi–Yau対）

$n$次元射影klt対で$K\_X+D\equiv0$なら、仮想階数は$2n$以下となる。$D$が標準係数を持ち、$s(K\_X+D)\sim0$を満たす最小正整数が$s$なら、次数$s$の連結巡回log index-one cover $Y\to X$が存在し、$Y$はcanonical、$K\_Y\sim0$で、

$$
1\longrightarrow\pi\_1(Y\_{\mathrm{reg}})\longrightarrow\pi\_1^{\mathrm{reg}}(X,D)
\longrightarrow\mathbb Z/s\mathbb Z\longrightarrow1
$$

が完全となる。このとき仮想階数は$2\widetilde q(Y)$に等しい。境界がない場合は$2\widetilde q(X)$である。$\widetilde q$は有限quasi-étale被覆にわたる非正則性の上限を表す。

### 主定理4（Theorem 4：nef対数反標準類）

$-(K\_X+D)$がnefであれば、regional基本群は仮想可換であり、

$$
r\le2c\le2\dim X
$$

を満たす。これは多項式増大性も含意する。Corollary 2では、regional基本群と$\pi\_1(X\_{\mathrm{reg}})$の双方の増大次数が$2c$以下になる。一般のlc Calabi–Yau対のorbifold基本群まで同じ結論を拡張することはできない、とIntroductionは注意している。

### 主定理5（Theorem 5：低coregularityでの有効性）

次元$d\ge1$、絶対coregularity $0\le c\le2$の射影klt対では、regional基本群に導来長$2d-1$以下の可解正規部分群が存在し、その指数は$c,d$だけに依存する$i(c,d)$以下となる。これは可換部分群の指数を一様に抑える主張とは区別される。

### 主定理6（Theorem 6：トーラス被覆）

$K\_X+D\sim\_{\mathbb Q}0$の射影klt対には、連結有限quasi-étale被覆$\nu:Y\to X$で

$$
Y=A\times Z,\qquad \dim A=\widetilde q(X),\qquad
\nu^{\ast}D=\operatorname{pr}\_Z^{\ast}D\_Z
$$

となるものが存在する。$A$はアーベル多様体、$(Z,D\_Z)$はkltで$K\_Z+D\_Z\sim\_{\mathbb Q}0$、$\widetilde q(Z)=0$となる。Corollary 1は$\widetilde q(X)\le c$を与える。ただし境界のあるregional基本群の正確な階数を、台の$\widetilde q(X)$だけから決めることはできない。

### 主定理7（Theorem 7：正則部分と一意化）

nef対数反標準類を持つ射影klt対で$q=\widetilde q(X)$とすると、$\pi\_1(X\_{\mathrm{reg}})$は仮想的に$\mathbb Z^{2q}$であり、$q=0$と有限性が同値となる。適切な連結有限quasi-étale被覆$X'\to X$の後には

$$
\pi\_1(X'\_{\mathrm{reg}})\simeq\pi\_1(X')\simeq\mathbb Z^{2q},
\qquad
(\widetilde X',\widetilde D')\simeq\mathbb C^q\times Z\times(F,D\_F)
$$

となる。$Z$は射影canonicalで$K\_Z\sim0$、$(F,D\_F)$は射影kltで$F$は有理連結、$-(K\_F+D\_F)$はnefである。さらに$\pi\_1(Z\_{\mathrm{reg}})=\pi\_1(F\_{\mathrm{reg}})=1$となる。積分解そのものは既存の構造定理から導かれるもので、新たな点は正則部分の基本群まで制御することだと著者らは明確に区別している。

## 証明の見取り図

coregularityによる帰着と、標準係数Calabi–Yau対のlog index-one coverを組み合わせる。被覆先で既知の正則部分の仮想可換性を適用し、元の対へ戻すことが全次元の階数評価の基盤である。トーラス被覆には既存の分解理論を用い、一意化の精密化にはMatsumura–Wangの構造定理を組み合わせる。

Introductionは、双有理なterminalizationが正則部分の基本群を保存するとは限らないため、以前の原稿のそのような推移を用いず、最近のCalabi–Yau基本群定理を直接使うと説明している。

## 原論文との対応

- **Abstractページ:** [Fundamental Groups and Coregularity: Klt Pairs with Trivial and Nef Log-Anticanonical Class](https://arxiv.org/abs/2610.21358)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.21358v1) — Section 1, pp. 1–5（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorems 1–7; Corollaries 1–2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.21358v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source_scope:** Abstract and Introduction
