---
layout: paper
title: Sharp Polynomial Upper Bounds for Anticanonical Volumes
title_ja: 反標準体積の多項式上界と次元ごとの最適指数
authors: Pinxian Bie, Peien Du, Zhengjie Yu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  For every positive integer $n$, we prove that there is a constant $C_n$, depending only on $n$, such that $Vol(-K_X) \leq C_n \epsilon^{-(2^n-n-1)}$ whenever $X$ admits an $\epsilon$-lc log Fano boundary. The exponent is optimal in every dimension at least two, even for toric Fano varieties of Picard number one. In particular, the optimal exponent for fourfolds is eleven. We also prove an anticanonical interpolation theorem with optimal exponent $2^n-1$. The proof combines signed discrepancy estimates under projection, finite morphisms to projective space, and the canonical bundle formula. A reduction to a base bounded independently of $\epsilon$, followed by a volume estimate along a flag, yields the sharper volume exponent.
topic: algebraic-geometry
tags:
- fano-varieties
- singularities
- birational-geometry
- minimal-model-program
- positivity
arxiv_id: 2610.10537v1
arxiv_url: https://arxiv.org/abs/2610.10537v1
arxiv_submitted: '2026-10-07'
arxiv_updated: '2026-10-07'
summary: |-
  ε-lcなlog Fano境界を持つn次元多様体の反標準体積を、εの逆数の多項式で評価し、指数2^n−n−1が最適であると示す。反標準境界を補間してlog canonical性を保つ別の評価と、体積評価の帰納法を分離することが鍵となる。
abstract_en: ''
summary_en: |-
  Qualitative boundedness leaves open the rate at which anticanonical volumes can grow as singularities deteriorate. This paper determines an optimal dimension-dependent power of the inverse log-discrepancy parameter for varieties admitting a controlled log Fano boundary. A separate interpolation theorem controls how far an arbitrary anticanonical divisor can be mixed into a good boundary. The authors combine that estimate with a bounded-base reduction to obtain the sharper exponent for volumes.
abstract_ja: |-
  ε-lcなlog Fano境界を持つn次元多様体では、反標準体積が次元だけに依存する定数とε^{−(2^n−n−1)}の積で抑えられる。nが2以上なら、この指数はPicard数1のトーリックFano多様体に限っても改善できず、四次元では11となる。論文はさらに、最適指数2^n−1を持つ反標準境界の補間定理を証明する。射影によるdiscrepancy評価、射影空間への有限射、標準束公式と、有界な底空間上のflagによる体積評価を用いる。
abstract_source_url: https://arxiv.org/abs/2610.10537v1
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.10537v1](https://arxiv.org/abs/2610.10537v1)
- **著者:** Pinxian Bie, Peien Du, Zhengjie Yu
- **初回投稿日:** 2026-10-07
- **最終更新日:** 2026-10-07
- **主分類・副分類:** math.AG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano多様体の特異点の悪化を許すと、反標準体積は大きくなりうる。既知の有界性定理は、次元と特異点のパラメータを固定すれば上界があると保証するが、そのパラメータへの依存の仕方までは決めない。

この論文は、ε-lcなlog Fano境界を持つ多様体について、体積の上界がεの逆数のどのべきで増大するかを決定する。主張される指数は次元nに対して2^n−n−1であり、トーリック例によってそれ以上小さくできない。最適化されるのは指数であり、先頭の定数ではない。

重要なのは、反標準境界の補間を制御する評価と、そこから体積を求める評価を同じものとして扱わないことである。補間の最適指数は2^n−1となる一方、底空間を改めて有界化する手順によって、体積ではより小さい指数が得られる。

## 背景と問題設定

複素数体上で、$0<\varepsilon\le1$とする。論文でいう$\varepsilon$-Fano typeの多様体は、正規な射影的$\mathbb Q$-Gorenstein多様体$X$で、有効$\mathbb Q$因子$\Delta$が存在し、$(X,\Delta)$が$\varepsilon$-lc、$-(K_X+\Delta)$が豊富となるものである。パラメータは$X$だけでなく境界付きの対に課される。

主結果の量は$\operatorname{vol}(-K_X)$である。対象は$-K_X$が常にnefであるクラスだけではないため、体積を無条件に最高自己交点数で置き換えることはしない。Introductionは、三次元で既知の$\varepsilon^{-4}$型評価を出発点として、全次元の指数を問う。

## 主結果

### 体積の最適指数（Theorem 1.1）

各正整数$n$に対し、次元だけに依存する$C_n>0$が存在し、すべての$n$次元$\varepsilon$-Fano type多様体について

<div>
$$
\operatorname{vol}(-K_X)\le C_n\varepsilon^{-a_n},
\qquad a_n=2^n-n-1
$$
</div>

が成立する。特に$\varepsilon$-lc Fanoおよびweak Fano多様体に適用される。$n\ge2$では、$X$をQ-factorialなPicard数1のトーリックFano多様体に限定しても指数$a_n$は下げられない。

初めの指数は$0,1,4,11,26,57$である。$n=1$では$C_1=2$を取れるが、一般の$C_n$の最小値を求める定理ではない。Introductionは、有効実境界についても次元依存の係数を調整すれば同様に適用できると述べる。

### 四次元への帰結（Corollary 1.2）

ある絶対定数$C_4>0$について、$\varepsilon$-lc weak Fano四次元多様体は

<div>
$$
\operatorname{vol}(-K_X)\le C_4\varepsilon^{-11}
$$
</div>

を満たす。11はPicard数1のFano四次元多様体でも最適な指数である。

### 反標準境界の補間（Theorem 1.3）

$X$を$n$次元の射影的$\mathbb Q$-Gorenstein Fano type多様体とし、有効$\mathbb Q$因子$B,D$が

<div>
$$
B\sim_{\mathbb Q}D\sim_{\mathbb Q}-K_X,
\qquad (X,B)\text{ が }\varepsilon\text{-lc}
$$
</div>

を満たすとする。次元だけに依存する$c_n>0$が存在し、

<div>
$$
0\le t\le c_n\varepsilon^{p_n},\qquad p_n=2^n-1
\quad\Longrightarrow\quad
\bigl(X,(1-t)B+tD\bigr)\text{ が lc}
$$
</div>

となる。$n\ge2$では、この指数も一様には下げられない。良い特異点を持つ境界$B$に、任意の有効反標準因子$D$をどれだけ混ぜられるかを評価する定理であり、すべての因子的付値を制御する。

## 証明の見取り図

Introductionは二つの次元帰納法を分ける。補間の帰納法では、射影下でdiscrepancyが失われる量を係数イデアルの商で追跡し、負の係数や垂直固定因子も保持する。有限射を介して射影空間の評価をterminal Fanoファイバーへ移し、標準束公式とMMPで底空間と結びつける。この段階の漸化式は$p_j=1+2p_{j-1}$、$p_1=1$である。

体積の帰納法では、さらに$\varepsilon$とは独立に次数が有界な偏極底空間へ帰着する。その底空間のflag上で体積を評価すると、最大の指数は底が一次元の場合に現れ、$a_n=a_{n-1}+p_{n-1}=2^n-n-1$となる。Introductionは、moduli b-divisorの一般的な半豊富性を仮定していないことも明記する。鋭さはAmbroの例を重み付き射影空間として記述して示すという構成である。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.10537v1](https://arxiv.org/abs/2610.10537v1)
- **Introduction:** Section 1、pp. 1–3（謝辞等はp. 4）。
- **主結果:** Theorems 1.1・1.3、Corollary 1.2、式(1.1)・(1.2)。
- **論文構成:** Sections 3–6で局所評価から補間定理へ進み、Sections 7–8で底の帰着と体積評価、Section 9で鋭さを扱う。
- **確認バージョン:** v1。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
