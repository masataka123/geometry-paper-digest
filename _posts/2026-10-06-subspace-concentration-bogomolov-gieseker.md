---
layout: paper
title: Subspace concentration condition and Bogomolov--Gieseker inequality
title_ja: 部分空間集中条件とBogomolov–Gieseker不等式
authors: Carl Tipler
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.MG
arxiv_abstract: |-
  We provide a necessary condition for integral polytopes to satisfy subspace concentration type inequalities, by mean of a convex geometric interpretation of the Bogomolov--Gieseker inequality.
topic: algebraic-geometry
tags:
- chern-classes
- stability
- toric-geometry
- vector-bundles-sheaves
arxiv_id: 2610.04623v1
arxiv_url: https://arxiv.org/abs/2610.04623
arxiv_submitted: '2026-10-03'
arxiv_updated: '2026-10-03'
summary: |-
  格子多面体の面積が各部分空間に集中しすぎないという条件から、余次元2の面の体積に関する必要条件を導く。トーリック接層の傾き半安定性とBogomolov–Gieseker不等式を凸幾何へ翻訳することで、滑らかな反射的多面体では具体的な体積下界を得る。
abstract_en: |-
  We provide a necessary condition for integral polytopes to satisfy subspace concentration type inequalities, by mean of a convex geometric interpretation of the Bogomolov--Gieseker inequality.
summary_en: ''
abstract_ja: Bogomolov–Gieseker不等式を凸幾何の言葉で解釈することにより、格子多面体が部分空間集中型の不等式を満たすための必要条件を与える。
abstract_source_url: https://arxiv.org/abs/2610.04623
license_name: CC BY 4.0
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.04623v1](https://arxiv.org/abs/2610.04623)
- **著者:** Carl Tipler
- **初回投稿日:** 2026-10-03
- **最終更新日:** 2026-10-03
- **主分類・副分類:** math.AG（主分類）、math.MG（副分類）
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## 要約

凸幾何における部分空間集中条件は、多面体の法線方向に付随する測度が低次元の部分空間へ偏りすぎないことを表す。本論文は格子多面体のファセットの格子体積を用いた集中条件を考え、そこから余次元2の面の体積への制約を引き出す。

その仕組みは、トーリック幾何を介して集中条件を接層の傾き半安定性と結び付けることである。半安定層に対するBogomolov–Gieseker不等式を面の体積へ翻訳すると、法線のなす角度に依存する重みを付けた体積和が非負になる。

滑らかな反射的多面体では、重み付きの条件を特に簡潔な体積下界として表せる。一方、一般の凸体に同様の不等式があるかは今後の問題として提示されており、格子多面体の結果をそのまま一般の凸体へ拡張したものではない。

## 背景と問題設定

階数 $n$ の格子 $N$ と双対格子 $M$ を取り、全次元の格子多面体を

<div>
$$
P=\lbrace m\in M_{\mathbb R}\mid
\langle m,u_\rho\rangle\geq-a_\rho\quad(\rho\in\Sigma(1))\rbrace
$$
</div>

と表す。$u_\rho$ は原始的な内向き法線、$F^\rho$ は対応するファセットである。$\operatorname{Vol}_M$ は各面のアフィン包における格子体積を表す。

通常のcone-volume測度は原点と各ファセットが張る錐の体積を重みとする。本論文の集中条件はファセット自身の格子体積を用いるので、一般には両者は異なる。全ての $a_\rho=1$ である反射的多面体では、錐の体積が $\operatorname{Vol}_M(F^\rho)/n$ となり、二つの条件が対応する。

## 主結果

### 主定理1：余次元2の面に対する必要条件（Theorem 1.1）

全ての実部分空間 $E\subset N_{\mathbb R}$ に対して

<div>
$$
\sum_{u_\rho\in E}\operatorname{Vol}_M(F^\rho)
\leq\frac{\dim E}{n}
\sum_{\rho\in\Sigma(1)}\operatorname{Vol}_M(F^\rho)
$$
</div>

が成立するなら、余次元2の面 $F^\tau$ について

<div>
$$
\sum_{\tau\in\Sigma(2)}A_\tau\operatorname{Vol}_M(F^\tau)\geq0
$$
</div>

が成立する。多面体の滑らかさは仮定しない。

重み $A_\tau$ はIntroductionの式(3)で定義される。格子の基底を正規直交とする内積 $Q$ を固定し、二次元錐 $\tau$ を原論文で指定された格子点による小錐 $\tau'=\rho_1+\rho_2$ に分割すると、

<div>
$$
A_\tau=
\sum_{\substack{\tau'\subset\tau\\\tau'=\rho_1+\rho_2}}
\left[
2+(n-1)\left(
\frac{Q(u_{\rho_1},u_{\rho_2})}{Q(u_{\rho_1},u_{\rho_1})}
+\frac{Q(u_{\rho_2},u_{\rho_1})}{Q(u_{\rho_2},u_{\rho_2})}
\right)\right].
$$
</div>

ここで各 $u_{\rho_i}$ は分割後の射線の原始生成元である。分割は、元の二法線が張る半開基本平行四辺形の格子点が定める射線によるものを使う。この式は、単なる面数ではなく、格子と法線の角度を反映した体積制約である。

### 主定理2：滑らかな反射的多面体の体積下界（Theorem 1.2）

$P$ が滑らかな反射的格子多面体であり、任意の $E\subset N_{\mathbb R}$ に対して

<div>
$$
\sum_{u_\rho\in E}\operatorname{Vol}_M(F^\rho)
\leq \dim(E)\operatorname{Vol}_M(P)
$$
</div>

が成り立つなら、

<div>
$$
\sum_{\tau\in\Sigma(2)}\operatorname{Vol}_M(F^\tau)
\geq \frac{(n-1)^2}{2}\operatorname{Vol}_M(P)
$$
</div>

となる。ファセットの体積に対する上からの集中制約が、余次元2の面の体積の総和に対する下界を与える点が中心である。

## 証明の見取り図

Introductionでは、ファセットの体積条件をトーリック接層の傾き半安定性に読み替え、そのBogomolov–Gieseker不等式を交点理論で面の体積へ戻す方針が述べられる。非滑らかな格子多面体にも適用するため、古典的な対応を一般化する必要がある。

また、体積多項式の一階微分はファセットの体積、二階の混合微分は余次元2の面の体積に対応する。この観点から結果を説明する一方、純粋な凸幾何による直接証明や一般の凸体への拡張は課題として区別されている。

## 原論文との対応

- **Abstractページ:** [arXiv:2610.04623](https://arxiv.org/abs/2610.04623)
- **Introduction:** Section 1、pp. 1–3。Section 2開始前までを確認。
- **主要定理・式:** Theorems 1.1–1.2、式(2)–(8)。重みは式(3)。
- **確認バージョン:** v1。
- **確認ライセンス:** CC BY 4.0。英語Abstract原文と日本語訳の出典は上記論文である。
- **source_scope:** Abstract and Introduction。
