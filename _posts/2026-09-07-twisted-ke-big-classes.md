---
layout: paper
title: "Twisted Kähler-Einstein metrics in big classes"
title_ja: "big類におけるtwisted Kähler–Einstein計量"
authors: "Tamás Darvas, Kewei Zhang"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AG
  - math.CV
arxiv_abstract: >-
  We prove existence of twisted Kähler-Einstein metrics in big cohomology classes, using a divisorial stability condition. In particular, when $-K_X$ is big, we obtain a uniform Yau-Tian-Donaldson existence theorem for Kähler-Einstein metrics. To achieve this, we build up from scratch the theory of Fujita-Odaka type delta invariants in the transcendental big setting, using pluripotential theory. We do not use the K-energy in our arguments, and our techniques provide a simple roadmap to prove Yau-Tian-Donaldson existence theorems for Kähler-Einstein type metrics, that only needs convexity of the appropriate Ding energy. As an application, we give a simplified proof of Li-Tian-Wang's existence theorem in the log Fano setting.
topic: differential-geometry
tags:
  - kahler-einstein-metrics
  - k-stability
  - pluripotential-theory
  - monge-ampere-equations
arxiv_id: "2208.08324v4"
arxiv_url: "https://arxiv.org/abs/2208.08324"
arxiv_submitted: "2022-08-17"
arxiv_updated: "2024-04-28"
summary: >-
  bigな超越的コホモロジー類上で、因子的delta不変量が1を超えるという一様安定性からtwisted Kähler–Einstein計量の存在を導く。特に反標準類がbigなら一様Yau–Tian–Donaldson型存在定理が得られ、一般のbig類でも多重ポテンシャル論とDing汎関数だけで存在論を扱えることを示す。
abstract_en: ""
summary_en: >-
  The paper develops a pluripotential framework for twisted Kähler–Einstein equations in transcendental big cohomology classes. It defines a divisorial delta invariant and proves that its strict positivity threshold yields a solution when the twisting current is positive. This gives a uniform Yau–Tian–Donaldson existence statement when the anticanonical class is big. The method uses radial Ding energies and avoids relying on a K-energy theory in the non-nef big setting.
abstract_ja: >-
  本論文はbigなコホモロジー類上のtwisted Kähler–Einstein計量について、因子的安定性条件から存在を証明する。超越的big設定にFujita–Odaka型delta不変量を構成し、反標準類がbigな場合には一様Yau–Tian–Donaldson型定理を得る。議論はK-energyを用いず、多重ポテンシャル論とDing energyの凸性に基づく。応用としてlog Fanoの場合のLi–Tian–Wangの存在定理に簡潔な証明を与える。
abstract_source_url: "https://arxiv.org/abs/2208.08324"
license_name: "arXiv non-exclusive distribution license"
license_url: "http://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2208.08324](https://arxiv.org/abs/2208.08324)
- **著者:** Tamás Darvas, Kewei Zhang
- **初回投稿日:** 2022年8月17日
- **最終更新日:** 2024年4月28日
- **主分類・副分類:** math.DG（主分類）, math.AG, math.CV
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler幾何のYau–Tian–Donaldson予想は標準計量の存在を代数的安定性で特徴づける。本論文は、線束のChern類とは限らず、nefとも限らないbigな実$(1,1)$類に舞台を広げる。

コンパクトKähler多様体$X$、big類を表す$	heta$、正のtwisting current $\eta_\psi$に対し、問題は最小特異性をもつ$u\in\operatorname{PSH}(X,\theta)$について

$$
(\theta+dd^c u)^n=e^{-u+f-\psi}\omega^n
$$

を解くことに帰着する。著者らはprime divisor上のlog discrepancyと期待Lelong数から超越的delta不変量$\delta_\psi(\{\theta\})$を定義する。

主結果は$\eta_\psi\geq0$かつ$\delta_\psi(\{\theta\})>1$なら解が存在するというものである。特に$-K_X$がbigなら、$\delta(-K_X)>1$からKähler–Einstein計量が得られる。

bigかつ非nefな場合にはK-energyの適切な一般論が使えない。そこでDing汎関数のrayに沿う傾きとdelta不変量を結び、必要な凸性だけを用いる点が方法上の新規性である。

## 背景と問題設定

$c_1(-K_X)=\{\theta\}+\{\eta\}$とし、$\eta_\psi=\eta+dd^c\psi$と置く。求めるcurrentは$\operatorname{Ric}\theta_u=\theta_u+\eta_\psi$を満たす。因子的安定性は

$$
\delta_\psi(\{\theta\})=\inf_E\frac{A_\psi(E)}{S_\theta(E)},\qquad
A_\psi(E)=A_X(E)-\nu(\psi,E)
$$

で測られる。ここで$E$は$X$上の滑らかな双有理モデルにあるprime divisorであり、$S_\theta(E)$はbig類の体積を積分して得る期待Lelong数である。

## 主結果

### 主定理（Theorem 1.2）

$\eta_\psi\geq0$かつ$\delta_\psi(\{\theta\})>1$なら、上のMonge–Ampère方程式は最小特異性をもつ解$u$を有する。したがって$\operatorname{Ric}\theta_u=\theta_u+\eta_\psi$となる。結論は、超越的で非nefでもあり得るbig類に安定性から標準計量を構成できることである。

### 反標準類への帰結（Corollary 1.3）

$-K_X$がbigで$\delta(-K_X)>1$なら、$\theta_u$は$\operatorname{Ric}\theta_u=\theta_u$を満たすKähler–Einstein計量となる。Fanoの場合には古典的一様YTD定理の新しい多重ポテンシャル論的証明を与える。

### delta不変量の解析的特徴づけ（Theorems 1.4, 1.5）

Theorem 1.4はsublinear subgeodesic rayに沿うDing汎関数の漸近傾きをLegendre変換したtest curveの可積分性閾値で表す。Theorem 1.5は一般化された$\delta_\mu$を、すべてのray上でradial Ding汎関数が非負となる最大の係数として特徴づける。これが因子的条件から存在定理へ進む橋となる。

## 証明の見取り図

Guan–Zhouのopenness theoremとvaluative integrability criterionにより、divisor上の量を指数可積分性へ移す。Ross–Witt Nyström対応でtest curveとsubgeodesic rayを結び、Ding汎関数の傾きを計算する。delta条件はray方向のcoercivityを与え、$\eta_\psi\geq0$から得られるDing汎関数の凸性と変分法を組み合わせて解の存在へ至る。

## 原論文との対応

- **Abstractページ:** [arXiv:2208.08324](https://arxiv.org/abs/2208.08324)
- **Introduction:** Section 1, pp. 1–5
- **Introduction中で言及された主要定理番号:** Theorems 1.2, 1.4, 1.5; Corollary 1.3
- **論文構成の説明:** Introduction, p. 5
- **確認したarXivバージョン:** v4
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
