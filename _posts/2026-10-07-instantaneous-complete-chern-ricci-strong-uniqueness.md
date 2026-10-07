---
layout: paper
title: Strong Uniqueness for Instantaneously Complete Chern-Ricci Flow
title_ja: 瞬時に完備となるChern–Ricci流の強一意性
authors: Shaochuang Huang, Zhuo Peng
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: |-
  In this paper, we study strong uniqueness for smooth instantaneously complete Chern-Ricci flows on noncompact complex manifolds. Under suitable reference metric and positivity assumptions, we establish strong uniqueness for initial Hermitian metrics which are K\"ahler outside a compact set. The initial metric may be incomplete, and no curvature, metric comparison, or growth bounds are imposed on the evolving solutions. In particular, we obtain strong uniqueness from complete initial metrics in this class with bounded Chern-Ricci curvature. We also prove stationarity of flows from the Euclidean metric on $\mathbb{C}^n$ and uniqueness of the instantaneously complete flow from the Euclidean metric on the complex unit ball for all positive time. Finally, on complex surfaces, we show that a Ricci flow remaining Hermitian for a fixed complex structure is K\"ahler at all times if it is K\"ahler at one time, and derive a corresponding strong uniqueness result for Ricci flows in this class.
topic: differential-geometry
tags:
- kahler-ricci-flow-solitons
- curvature
- noncompact-kahler-geometry
arxiv_id: 2610.08233v1
arxiv_url: https://arxiv.org/abs/2610.08233v1
arxiv_submitted: '2026-10-06'
arxiv_updated: '2026-10-06'
summary: |-
  非コンパクト複素多様体上で、正時刻には完備となるChern–Ricci流の一意性を扱う。初期計量と完備な参照計量に正値性などの条件を課し、流自体の曲率・比較・増大度の仮定なしに一意性を示す。初期計量は不完備でもよく、複素ユークリッド空間や単位球のユークリッド初期値に具体的な帰結を得る。
abstract_en: ''
summary_en: |-
  Noncompact geometric flows can require additional control at infinity before uniqueness is available. Here that control is placed on reference data and the initial Hermitian metric, while the evolving Chern–Ricci solutions are assumed only smooth and complete at positive times. Canonical potential estimates allow the authors to compare solutions starting from a small positive time and then approach the initial time. Applications distinguish the stationary Euclidean flow on complex affine space from the instantly complete evolution of the incomplete Euclidean metric on a ball.
abstract_ja: |-
  非コンパクト複素多様体上の滑らかで瞬時に完備となるChern–Ricci流について、発展中の解への事前的な曲率制御を用いない強一意性を調べる。コンパクト集合の外でKählerである初期Hermitian計量に対し、完備な参照計量との比較と正値性を仮定して一意性を証明する。完備な初期計量のChern–Ricci曲率が両側から有界な場合や、複素ユークリッド空間と単位球の場合を含む。複素曲面では、固定した複素構造に関してHermitianであり続けるRiemannian Ricci流にも応用する。
abstract_source_url: https://arxiv.org/abs/2610.08233v1
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.08233v1](https://arxiv.org/abs/2610.08233v1)
- **著者:** Shaochuang Huang, Zhuo Peng
- **初回投稿日:** 2026-10-06
- **最終更新日:** 2026-10-06
- **主分類・副分類:** math.DG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

非コンパクト多様体上の幾何学的な流では、同じ初期値をもつことだけで一意性を得るのは容易でない。従来の結果では、解の曲率や計量の比較、無限遠での振る舞いを制御することが多い。本論文は、発展中の解にそのような事前評価を課さない「強一意性」を扱う。

対象となるChern–Ricci流は、すべての正時刻で完備となる滑らかな流である。初期計量は不完備でもよいが、コンパクト集合の外でKählerであり、完備な参照計量との上からの比較と、一定の正値性条件を満たす必要がある。この条件の下で、二つの流は指定された共通時間区間で一致する。

応用として、複素ユークリッド空間のユークリッド計量から出発する流の定常性と、単位球上の不完備なユークリッド計量から出発する瞬時完備な流の一意性を得る。さらに複素曲面では、固定した複素構造に対してHermitianであり続けるRicci流のKähler性を利用し、一意性を導く。

## 背景と問題設定

本論文の規約では、Hermitian形式 $\omega$ に対する流は

<div>
$$
\partial_t\omega=-\operatorname{Ric}(\omega),\qquad
\omega(0)=\omega_0,\qquad
\operatorname{Ric}(\omega)=-\sqrt{-1}\,\partial\bar\partial\log\det(h_{i\bar j})
$$
</div>

である。Chern–Ricci形式が閉じているため $d\omega(t)=d\omega_0$ となり、初期値がKählerならKähler–Ricci流になる。コンパクト集合の外でKählerであるという条件も保存される。

瞬時完備とは、すべての $t>0$ で計量が完備であることをいう。時刻零までの滑らかさは、空間のコンパクト部分上で要求される。「強一意性」は解の曲率・計量比較・増大度の追加仮定なしの一意性を意味し、初期値や参照計量への仮定まで不要という意味ではない。

## 主結果

### 主定理：参照計量を用いた強一意性（Theorem 1.1）

同じ初期値をもつ二つの滑らかで瞬時完備な流 $\omega_1,\omega_2$ は、$0\le t\le\min\lbrace S,s\rbrace $ で一致する。ここで流は $M\times[0,S]$ 上で定義され、次の参照条件を仮定する。

$\widehat\omega$ は完備なHermitian計量で、$\widehat\omega$ と $\omega_0$ はともにコンパクト集合の外でKählerとする。ある $K\ge0$、$C\ge1$ に対し

<div>
$$
\operatorname{Ric}(\widehat\omega)\ge-K\widehat\omega,
\qquad \omega_0\le C\widehat\omega
$$
</div>

が成り立ち、さらに $s>0$、$\beta>0$ と実関数 $u\in C^\infty(M)\cap L^\infty(M)$ が存在して、

<div>
$$
\omega_0-s\operatorname{Ric}(\widehat\omega)
+\sqrt{-1}\,\partial\bar\partial u\ge\beta\widehat\omega
$$
</div>

を満たすとする。$u$ の微分の一様評価は仮定しない。結論の時間範囲に正値性条件の $s$ が現れることも定理の一部である。

### 帰結1：完備な初期計量（Corollary 1.2）

$\omega_0$ 自体が完備で、コンパクト集合の外でKählerであり、

<div>
$$
-K^-\omega_0\le\operatorname{Ric}(\omega_0)\le K^+\omega_0,
\qquad K^-,K^+\ge0
$$
</div>

なら、二つの流は $K^+t<1$ を満たす共通時刻で一致する。$K^+>0$ のとき、両方が $t=1/K^+$ まで定義されれば連続性によりその端点でも一致する。初期値の全曲率テンソルの有界性は要求しない。

### 帰結2：複素ユークリッド空間（Corollary 1.3）

$\mathbf C^n$ 上の標準ユークリッド形式

<div>
$$
\omega_E=\frac{\sqrt{-1}}2\sum_{j=1}^n dz^j\wedge d\bar z^j
$$
</div>

から始まる滑らかで瞬時完備なChern–Ricci流は、すべての定義時刻で $\omega(t)=\omega_E$ となる。

### 帰結3：単位球の不完備な初期計量（Corollary 1.4）

単位球 $\mathbf B^n$ では、$\widehat\omega=\sqrt{-1}\partial\bar\partial[-\log(1-|z|^2)]$ とし、$\omega_0\le C\widehat\omega$ かつ $d\omega_0$ の台がコンパクトなら、同じ初期値の二つの瞬時完備な流は共通存在区間全体で一致する。特に、球に制限したユークリッド計量からは、すべての $t\ge0$ で定義された一意な瞬時完備の流が存在する。この初期計量は不完備であり、$\mathbf C^n$ 上の定常な場合と異なる。

### 帰結4：複素曲面上のHermitian Ricci流（Corollary 1.5）

複素次元2で、Riemannian Ricci流が固定した複素構造に対して常にHermitianであり、一つの時刻でKählerなら、すべての時刻でKählerとなる。このKähler性の主張自体には完備性や曲率評価を必要としない。

連結Kähler曲面の初期値にTheorem 1.1の参照条件を課し、二つのRicci流がすべての時刻で同じ複素構造に関してHermitian、正時刻で完備なら、$0\le t\le\min\lbrace S,s/2\rbrace $ で一致する。時間係数はChern–Ricci流とRiemannian Ricci流の規約の違いを反映する。

## 証明の見取り図

Introductionでは、各流の標準的なポテンシャルの上下評価を作ることが中心とされる。上からの評価には参照計量の完備性、Chern–Ricci下界、初期計量の比較を使う。トレース不等式を時間積分した非負関数に楕円型の最大値原理を適用する。

下からの評価には正値性条件と放物型最大値原理を用いる。コンパクト集合の外ではKähler–Ricci流であり、コンパクト部分の誤差は閉じた正時間区間で制御できる。両評価は $t\to0^+$ で一様に零へ近づくため、時刻 $\varepsilon>0$ から二つのポテンシャルを比較し、最後に $\varepsilon\to0^+$ とできる。

複素曲面でのKähler性はLee形式の点ごとの発展方程式によって扱う。ここでも固定した複素構造に関して流がHermitianであり続けることが重要であり、任意の4次元Ricci流にそのまま適用する主張ではない。

## 原論文との対応

- **確認箇所:** Abstract、Introduction（PDF 1–6頁、Section 2の前まで）。
- **主結果:** Theorem 1.1、Corollaries 1.2–1.5。条件(1.3)–(1.5)、時間範囲、単位球の参照形式を確認した。
- **証明方針:** Introductionのポテンシャル評価とLee形式の説明に基づく。後続節の最大値原理や証明は検証していない。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
