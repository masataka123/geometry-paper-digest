---
layout: paper
title: "A counterexample to the bounded mass property"
title_ja: "有界質量性質への反例"
authors: "Mingchen Xia, Kewei Zhang"
arxiv_primary_category: "math.CV"
arxiv_categories:
  - math.CV
  - math.AG
  - math.DG
arxiv_abstract: >-
  A compact complex manifold has the bounded mass property if, for one (equivalently, every) Hermitian form $ω$, the masses $\int_X(ω+\mathrm{dd}^{\mathrm{c}}\varphi)^n$ are uniformly bounded over all smooth $\varphi$ with $ω+\mathrm{dd}^{\mathrm{c}}\varphi>0$. We prove that this property fails on the Hopf threefold $(\mathbb C^3\setminus\{0\})/\langle z\mapsto\mathrm{e}^{-1}z\rangle$, answering a question of Boucksom--Guedj--Lu.
topic: several-complex-variables
tags:
  - pluripotential-theory
  - monge-ampere-equations
arxiv_id: "2608.21053v1"
arxiv_url: "https://arxiv.org/abs/2608.21053"
arxiv_submitted: "2026-08-21"
arxiv_updated: "2026-08-21"
summary: >-
  Hermitian計量に関するMonge--Ampère質量が全てのコンパクト複素多様体で一様有界かという問いに反例を与える。Hopf三次元多様体上で正値性を保つポテンシャル列を構成し、その総質量が無限大へ発散することを示す。
abstract_en: ""
summary_en: >-
  The authors disprove a proposed universal finiteness property for Hermitian Monge–Ampère masses. On a three-dimensional Hopf manifold they construct smooth potentials whose perturbed Hermitian forms stay positive while their total cubic masses diverge. The construction exploits the elliptic fibration of the Hopf manifold and converts mass growth into fiberwise Dirichlet energy. Heat-kernel regularization supplies high-energy potentials compatible with positivity.
abstract_ja: >-
  コンパクト複素多様体上でHermitian形式をポテンシャルにより正に保って変形したとき、そのMonge--Ampère質量が一様有界とは限らない。標準的Hopf三次元多様体上に質量が発散する列を構成し、Boucksom--Guedj--Luの問いに否定的に答える。
abstract_source_url: "https://arxiv.org/abs/2608.21053"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.21053v1](https://arxiv.org/abs/2608.21053)
- **著者:** Mingchen Xia, Kewei Zhang
- **初回投稿日・最終更新日:** 2026-08-21
- **主分類・副分類:** math.CV; math.AG; math.DG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler多様体ではStokesの定理により $\int_X(\omega+dd^c\varphi)^n$ はポテンシャルに依存しない。一般のHermitian多様体では $\omega$ が閉でないため質量は変化し、その上限が有限かどうかが多重ポテンシャル論の基礎問題となる。

次元2以下およびFujikiクラスでは有界性が知られていた。本論文は最初の非自明な候補である3次元Hopf多様体を調べ、正値性を保ちながら質量が発散するポテンシャル列を構成する。

反例は単なる非有界性の主張にとどまらず、Hopf多様体の楕円曲線束構造を使って質量増分をファイバー方向のDirichletエネルギーとして厳密に表示する。これにより問題を高エネルギー関数の構成へ還元する。

## 背景と問題設定

Hermitian形式 $\omega$ に対し、上Monge--Ampère質量を

$$
\operatorname{vol}(\omega)=\sup\left\{\int_X(\omega+dd^c\varphi)^n:\ \varphi\in C^\infty(X,\mathbb R),\ \omega+dd^c\varphi>0\right\}
$$

と置く。この値が有限であることは $\omega$ の選び方に依存せず、有界質量性質と呼ばれる。

## 主結果

### Hopf三次元多様体上の反例（Theorem 1.1）

$$
X=(\mathbb C^3\setminus\{0\})/\langle z\mapsto e^{-1}z\rangle
$$

上に、滑らかなHermitian形式 $\omega$ と $\varphi_j\in C^\infty(X,\mathbb R)$ が存在し、

$$
\omega+dd^c\varphi_j>0,\qquad \int_X(\omega+dd^c\varphi_j)^3\longrightarrow+\infty
$$

となる。したがって $\operatorname{vol}(\omega)=+\infty$ であり、$X$ は有界質量性質をもたない。

## 証明の見取り図

$X\to\mathbb P^2$ を楕円曲線 $E$ をファイバーとする束と見て、$\omega=\alpha+\beta$ を選ぶ。$dd^c\beta=-\alpha^2$ から、変形後の質量は初期質量とファイバー方向Dirichletエネルギーの和になる。楕円曲線のGreen関数を熱核で正則化し、高エネルギーを得る一方、基底方向へゆっくり熱流を進めて正値性条件の交差項を制御する。最後に基底だけに依存する補正を加え、発散するエネルギーを保ったまま大域的な滑らかなポテンシャルを得る。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.21053](https://arxiv.org/abs/2608.21053)
- **Introduction:** Section 1, pp. 1–2
- **主要定理:** Theorem 1.1
- **確認したarXivバージョン:** v1
- **source_scope:** Abstract and Introduction
