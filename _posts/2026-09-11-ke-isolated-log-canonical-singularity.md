---
layout: paper
title: "Kahler-Einstein metric near an isolated log canonical singularity"
title_ja: "孤立対数標準特異点近傍のKähler–Einstein計量"
authors: "Ved Datar, Xin Fu, Jian Song"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AP
arxiv_abstract: >-
  We construct Kahler-Einstein metrics with negative scalar curvature near an isolated log canonical (non-log terminal) singularity. Such metrics are complete near the singularity if the underlying space has complex dimension 2 or if the singularity is smoothable. In complex dimension 2, we show that any complete Kahler-Einstein metric of negative scalar curvature near an isolated log canonical (non-log terminal) singularity is smoothly asymptotically close to one of the model metrics constructed by Kobayashi and Nakamura arising from hyperbolic geometry.
topic: differential-geometry
tags:
  - kahler-einstein-metrics
  - singularities
  - monge-ampere-equations
  - metric-limits
  - uniformization
arxiv_id: "2106.05486v2"
arxiv_url: "https://arxiv.org/abs/2106.05486"
arxiv_submitted: "2021-06-10"
arxiv_updated: "2022-12-21"
summary: >-
  孤立した非klt対数標準特異点の近傍で、負スカラー曲率の有限体積Kähler–Einstein計量をDirichlet問題から構成する。複素次元2では完全性を証明し、任意の完全解が複素双曲球商または双曲上半平面の積の商に由来するモデルへ滑らかに漸近することを示す。
abstract_en: >-
  We construct Kahler-Einstein metrics with negative scalar curvature near an isolated log canonical (non-log terminal) singularity. Such metrics are complete near the singularity if the underlying space has complex dimension 2 or if the singularity is smoothable. In complex dimension 2, we show that any complete Kahler-Einstein metric of negative scalar curvature near an isolated log canonical (non-log terminal) singularity is smoothly asymptotically close to one of the model metrics constructed by Kobayashi and Nakamura arising from hyperbolic geometry.
summary_en: ""
abstract_ja: >-
  孤立した対数標準だが対数端末的でない特異点の近傍に、負スカラー曲率をもつKähler–Einstein計量を構成する。得られる計量は複素次元2で特異点近傍において完全である。さらに二次元では、任意の完全な負曲率Kähler–Einstein計量が、双曲幾何から生じるKobayashi–Nakamuraのモデル計量の一つへ滑らかに漸近する。
abstract_source_url: "https://arxiv.org/abs/2106.05486"
license_name: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)"
license_url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2106.05486v2](https://arxiv.org/abs/2106.05486)
- **著者:** Ved Datar, Xin Fu, Jian Song
- **初回投稿日:** 2021年6月10日
- **最終更新日:** 2022年12月21日
- **主分類・副分類:** math.DG（主分類）, math.AP
- **ライセンス:** [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

## 要約

対数標準特異点をもつ標準偏極多様体には特異Kähler–Einstein計量が存在するが、非klt特異点へ近づくときの局所幾何は十分理解されていなかった。本論文は孤立した非klt対数標準特異点の近傍で、負曲率Kähler–Einstein方程式を境界値問題として解く。

構成されるpotentialは対数解消上で特異性を制御され、計量は有限体積をもつ。複素次元2では特異点が無限遠となる完全性を証明する。

さらに任意の二つの完全Kähler–Einstein計量の体積比が特異点へ近づくと1へ収束する。bounded geometryをもつモデルが一つ存在すれば、任意の完全解は全微分階数でそのモデルへ近づく。

二次元の一意化と組み合わせると、完全解は球 $\mathbb B^2$ の放物型商、または $\mathbb H\times\mathbb H$ の放物型商に由来する局所モデルへ漸近する。これは特異点の解析構造が完全端の漸近幾何を決めるという安定性を与える。

## 背景と問題設定

孤立特異点 $p$ の小近傍 $U=\{\rho<a\}\cap X$ と局所標準体積形式 $\Omega_X$ を取り、境界値 $\psi$ に対する

$$
\begin{cases}
(\sqrt{-1}\partial\bar\partial\varphi)^n=e^\varphi\Omega_X & \text{on }U\setminus\{p\},\\
\varphi=\psi & \text{on }\partial U
\end{cases}
$$

を考える。問題は解の存在だけでなく、特異点までの距離が無限となる完全性と、異なる境界条件から得る解の漸近的一意性である。

## 主結果

### 存在定理（Theorem 1.1）

任意の滑らかな境界値に対し、対数解消 $\pi:Y\to X$ 上で滑らかかつplurisubharmonicな解 $\varphi_{KE}$ が存在し、有限体積Kähler–Einstein計量を定める。例外因子 $D$ に対してpotentialは

$$
C\geq\varphi_{KE}\geq-(2n+\varepsilon)\log(-\log|\sigma_D|_{h_D}^2)-C_\varepsilon
$$

を満たし、Lelong数は消え、$D$ へ近づくと $-\infty$ へ発散する。この成長条件を満たす解は一意である。

### 完全性（Theorem 1.2）

$\dim U=2$ ならば、Theorem 1.1の計量は特異点近傍で完全である。高次元一般の完全性はIntroductionではConjecture 1.1として区別される。

### 体積と計量の安定性（Theorems 1.3, 1.4）

二つの完全解 $g_{KE},g'_{KE}$ の境界からの距離を $R,R'$ とすると、遠方で

$$
1-\frac{c(n)}{R'(x)}\leq\frac{\det g'_{KE}}{\det g_{KE}}(x)\leq1+\frac{c(n)}{R(x)}
$$

が成り立つ。またbounded geometryをもつ完全モデル $\theta$ があれば、任意の完全解に対して

$$
\|\nabla_\theta^k(\omega_{KE}-\theta)\|_\theta(x)\leq\frac{C}{R_\theta(x)^{1/2}}
$$

となる。

### 二次元の漸近モデル（Corollary 1.1）

複素次元2では完全解は $\mathbb B^2/\Gamma$ または $(\mathbb H\times\mathbb H)/\Gamma$ の双曲計量へ漸近する。特異点へ向かう基点付き極限は、前者では直線 $\mathbb R$、後者では平坦円柱 $S^1\times\mathbb R$ となる。

## 証明の見取り図

存在は対数解消上の特異複素Monge–Ampère方程式のDirichlet問題を解いて得る。完全解同士の比較では、まず最大値原理的な議論で体積比を無条件に制御し、良いモデル計量がある場合にCheng–Yau型構成へ接続して高階正則性を得る。二次元では既知の局所一意化を使い、完全性と具体的な双曲モデルを導く。

## 原論文との対応

本記事はAbstractとIntroductionのTheorems 1.1–1.4、Corollary 1.1およびConjecture 1.1に基づく。一般次元の完全性は予想であり、証明済みの二次元の場合と区別した。
