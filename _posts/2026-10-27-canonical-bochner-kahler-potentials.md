---
layout: paper
title: Canonical Bochner-Kähler potentials via the Sasaki-Kähler correspondence
title_ja: Sasaki–Kähler対応による標準Bochner–Kählerポテンシャル
authors: Martin Kolář, Gerd Schmalz, David Sykes
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.CV
arxiv_abstract: We introduce a new approach to the study of Bochner-K\"ahler manifolds, based on normal form techniques in CR geometry. As observed by Webster, Bochner-K\"ahler manifolds are intimately related to spherical Sasakian manifolds. Our approach utilises this relationship as well as normal forms for spherical Sasakian manifolds (known as rigid spheres). In this setting potentials of Bochner-K\"ahler manifolds are nothing but the defining equations of rigid spheres in rigid normal form. This leads to a canonical formula for Bochner-K\"ahler potentials, as well as streamlined proofs of known results on the structure and the symmetries of Bochner-K\"ahler manifolds. Our approach also provides a host of examples in terms of an implicit formula of the corresponding K\"ahler potentials.
topic: differential-geometry
tags:
- curvature
- cr-geometry
- moduli
arxiv_id: 2609.03791v1
arxiv_url: https://arxiv.org/abs/2609.03791
arxiv_submitted: '2026-09-03'
arxiv_updated: '2026-09-03'
summary: Bochner曲率が消えるKähler構造を、球面的Sasaki構造のCR正規形から記述する。行列指数関数を使う標準的な陰関数公式で局所ポテンシャルとその一意なパラメータを与え、無限小対称性も有限次元の行列条件で表す。
abstract_en: ''
summary_en: The paper describes local Bochner–Kähler geometry through a normal-form problem for spherical Sasakian structures. A matrix-exponential equation supplies canonical parameters for Kähler potentials and generates examples. The same parameters turn the computation of infinitesimal automorphisms into explicit matrix constraints. This offers a CR-geometric route to new formulas and to established structural results.
abstract_ja: Bochner–Kähler多様体と球面的Sasaki多様体の対応を、CR幾何の正規形技法と組み合わせる。局所Kählerポテンシャルを行列指数関数による陰関数公式で標準的に記述し、そのパラメータの一意性を示す。これにより既知のモジュライ・対称性の結果を別の方法で導き、新しい具体例も構成する。
abstract_source_url: https://arxiv.org/abs/2609.03791
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.03791v1](https://arxiv.org/abs/2609.03791)
- **著者:** Martin Kolář, Gerd Schmalz, David Sykes
- **初回投稿日:** 2026-09-03
- **最終更新日:** 2026-09-03
- **主分類・副分類:** math.DG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler曲率からRicci部分を除いたBochner曲率が零である計量をBochner–Kähler計量という。その構造には既にBryantによる詳細な理論があるが、本論文はCR幾何の正規形を使い、ポテンシャルを直接与える別の記述を作る。

鍵は、Bochner–Kähler構造と球面的Sasaki構造の対応である。対応するrigid sphereの定義方程式を正規化すると、それがKählerポテンシャルの標準形になる。結果は有限個のパラメータを持つ行列の指数関数を使った陰関数公式として表され、局所構造の芽が正規化パラメータを一意に定める。

この表示は構造の分類だけでなく、新しい例を生成し対称性を計算するためにも使える。無限小自己同型はHermitian行列とベクトルに対する明示的な条件から求められる。ここで得られるのは局所幾何の記述であり、任意のパラメータが完備な大域多様体を与えるという主張ではない。

## 背景と問題設定

Bochner曲率はRiemann幾何のWeyl曲率に対応する跡零部分である。Websterの対応はその消滅をSasaki構造のCR平坦性へ移す。著者らはChern–Moserに始まる正規形の方法を用い、全てのBochner–Kählerポテンシャルを記述する問題を、rigid sphereを完全に記述する問題へ還元する。

Introductionは、以前のStantonのリストには完全性の証明がなく、後に不足が判明したことを背景として挙げる。本論文の標準形はその補完の方法を出発点とし、全ての局所ポテンシャルを扱う。

## 主結果

### ポテンシャルの標準公式（Theorem 1）

点 $p$ の近傍で実数値関数 $F$ がBochner–Kähler構造のKählerポテンシャルであることは、$p$ を原点とするある座標 $z=(z\_1,\ldots,z\_n)$ で

$$
\begin{bmatrix}0&z^\ast&\frac{i}{2}\end{bmatrix}
e^{2iAF}\begin{bmatrix}1\cr z\cr 0\end{bmatrix}=0,
\qquad
A=\begin{bmatrix}0&-2ia^\ast&r\cr 0&iX&a\cr 1&0&0\end{bmatrix}
$$

が成立することと同値である。$z^\ast,a^\ast$ は共役転置を表す。パラメータには次の正規化を課す。

- $X$ は実対角行列で、対角成分を $X\_{j,j}\ge X\_{j+1,j+1}$ の順に並べる。
- $a$ は非負実成分のベクトルで、$X\_{j,j}=X\_{j+1,j+1}$ なら $a\_{j+1}=0$ とする。
- $r$ は実数である。

この条件を満たす $A$ は、表現するBochner–Kähler構造の $p$ における芽から一意に決まる。公式が陰関数として $F$ を記述することと、構造のパラメータが標準化されることの両方が結論に含まれる。

### モジュライ表示との関係

$X$ を一般のHermitian行列、$a\in\mathbb C^n$ とすれば、Introductionに記載された従来のモジュライ表示は

$$
\bigl(i\mathfrak u(n)\oplus\mathbb C^n\oplus\mathbb R\bigr)/U(n)
$$

である。作用はブロック対角行列 $\operatorname{diag}(1,U,1)$ による $A$ の共役として書ける。定理1の条件は、この作用の各軌道に一意な代表を選んでいる。既知のモジュライ空間と無関係な別の分類ではない。

### 無限小自己同型の行列条件（Theorem 2）

定理1のパラメータ $a,X,r$ に対応する局所構造の無限小自己同型は、Hermitian行列 $H$ と $\beta\in\mathbb C^n$ で

$$
[H,X]=-2i(a\beta^\ast+\beta a^\ast),\qquad
 iHa=(X^2+rI)\beta
$$

を満たすものから得られる。$I$ は単位行列で、原文の $X^2+r$ におけるスカラー加算を明示したものである。$\alpha=iX\beta$、$\rho=2\operatorname{Im}\langle\beta,a\rangle$ とすると、対応するCR座標 $(z,w)$ 上のベクトル場は

$$
\begin{aligned}
&\bigl(\beta+iHz+\alpha w+2i\langle z,\alpha\rangle z+\rho zw\bigr)\frac{\partial}{\partial z}\cr
&\quad+\bigl(2i\langle z,\beta\rangle+2i\langle z,\alpha\rangle w+\rho w^2\bigr)\frac{\partial}{\partial w}
\end{aligned}
$$

と書ける。Introductionはこの結果を基に複素次元2および3の対称性代数を全パラメータにわたり分類すると述べるが、その後続節の個別分類表はここでは再掲しない。

## 証明の見取り図

Bochner曲率とChern–Moser曲率の対応を使い、球面的Sasaki構造をrigidなCR正規形で表す。その座標計算から定理1の行列指数関数の公式を導く。パラメータに対するユニタリ群の作用を正規化して一意性とモジュライ表示を得た後、同じパラメータで無限小対称性の条件を計算する。Cartanの構造方程式を使う既存の方法とは異なる解析的な経路であり、Introductionは既知の結果の簡潔な証明と具体例の構成を主要な利点としている。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2609.03791)
- **Introduction:** [PDF](https://arxiv.org/pdf/2609.03791v1) — Section 1, pp. 1–4冒頭（Section 2より前）
- **Introduction中で言及された主要結果:** Theorems 1, 2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2609.03791v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
