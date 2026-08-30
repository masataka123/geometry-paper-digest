---
layout: paper
title: "Hyperbolicity of generic hypersurfaces of polynomial degree via Green-Griffiths jet differentials"
title_ja: "Green–Griffithsジェット微分による多項式次数の一般超曲面の双曲性"
authors: "Benoît Cadorel"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
arxiv_abstract: >-
  We give a new version of a recent result of B{é}rczi-Kirwan, proving the Kobayashi and Green-Griffiths-Lang conjectures for generic hypersurfaces in the projective space , with a polynomial lower bound on the degree. Our strategy again relies on Siu's technique of slanted vector fields and the use of holomorphic Morse inequalities to prove the existence of a jet differential equation with a negative twist -- however, instead of using a space of invariant jet differentials, we base our computations on the classical Green-Griffiths jet spaces.
topic: algebraic-geometry
tags:
  - hyperbolicity
arxiv_id: "2406.19003v2"
arxiv_url: "https://arxiv.org/abs/2406.19003"
arxiv_submitted: "2024-06-27"
arxiv_updated: "2024-09-05"
summary: >-
  一般射影超曲面に対するGreen–Griffiths–Lang予想とKobayashi予想を、多項式的な次数下界のもとで確立する。古典的なGreen–Griffithsジェット空間を用いることで、準Brody双曲性には $d>153n^5/4$ という明示的下界を得る。
abstract_en: ""
summary_en: >-
  The paper proves effective hyperbolicity statements for generic projective hypersurfaces with degree bounds polynomial in the dimension. Its argument uses classical Green–Griffiths jet spaces rather than invariant-jet quotients. Holomorphic Morse inequalities and Siu's slanted vector fields yield quasi-Brody hyperbolicity, while a dimension-shifting result gives Brody hyperbolicity.
abstract_ja: >-
  一般射影超曲面について、Kobayashi予想とGreen–Griffiths–Lang予想を次元の多項式で与えられる次数下界のもとで証明する。負の捩れをもつジェット微分方程式の存在を正則Morse不等式から導き、Siuの傾斜ベクトル場の方法へ接続する。計算には不変ジェット微分空間ではなく古典的なGreen–Griffithsジェット空間を用いる。
abstract_source_url: "https://arxiv.org/abs/2406.19003"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2406.19003](https://arxiv.org/abs/2406.19003)
- **著者:** Benoît Cadorel
- **初回投稿日:** 2024年6月27日
- **最終更新日:** 2024年9月5日
- **主分類・副分類:** math.AG
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Green–Griffiths–Lang予想は一般型射影多様体の整曲線が真の代数部分集合に閉じ込められると予想し、Kobayashi予想は十分高次数の一般超曲面がBrody双曲的であると予想する。既知の有効次数下界は長く指数的であったが、Bérczi–Kirwanは非還元GITによるジェット空間を使って多項式下界を得た。

本論文は、より古典的なGreen–Griffithsジェット空間でも同じ基本戦略が働くことを示す。重み付き射影束の交叉理論から正則Morse不等式に必要な正値性を評価し、一般超曲面の準Brody双曲性に $O(n^5)$ の具体的下界を与える。

さらにRiedl–Yangの結果を用いて、この準双曲性の評価をBrody双曲性へ移す。新規性は傾斜ベクトル場という全体戦略の変更ではなく、古典的ジェット空間上の交叉数計算だけで多項式評価を実現した点にある。

## 背景と問題設定

$X\subset\mathbf P^{n+1}$ を次数 $d$ の滑らかな超曲面とする。Green–Griffithsジェット微分は整曲線が満たす微分方程式を供給し、負の捩れをもつ十分な方程式があれば、Siuの傾斜ベクトル場を通じて整曲線像の退化を導ける。論文は重み付き束

$$
\Omega_k=\Omega_X^{(1)}\oplus\cdots\oplus\Omega_X^{(k)}
$$

に対応する射影束とSegre類を用い、Morse不等式に現れる交叉多項式の正値性を評価する。

## 主結果

### 主定理（Theorem 2）

$n\ge 2$ とする。一般超曲面 $X\subset\mathbf P^{n+1}$ について、

$$
d>\frac{153}{4}n^5
$$

ならば $X$ は準Brody双曲的である。また

$$
d>\frac{153}{4}(2n-1)^5
$$

ならば $X$ はBrody双曲的である。前者は全ての非定数正則写像 $\mathbf C\to X$ の像が一つの真の代数部分集合に入ることを意味し、後者はそのような写像自体が存在しないことを意味する。

### 主要評価（Proposition 3.1）

Introductionでは、$k=n$ としたMorse交叉数 $P(n,d,\varepsilon)$ が $d$ の多項式で、最高次係数が正であること、さらに係数をFujiwara型評価で制御できることが述べられる。その結果、

$$
d>2D_\varepsilon n^4,\qquad
D_\varepsilon=\max\left\{\frac{27}{2},9\left(1+\frac{\varepsilon}{4}\right)\right\}
$$

のもとで必要なジェット線束がbigになる。$\varepsilon=5n+3$ と置くことで主定理の $n^5$ 評価が従う。

## 証明の見取り図

Green–Griffithsジェット束のフィルトレーションを重み付き対称代数で記述し、重み付き射影束上の線束へ問題を移す。正則Morse不等式は二つのnef束の交叉数の正値性に問題を還元する。重み付きSegre類でこの交叉数を展開し、係数にFujiwara評価を適用して明示的な次数下界を得る。そのbignessを傾斜ベクトル場の判定に入力し、最後にRiedl–Yangの次元移行を用いる。

## 原論文との対応

- **Abstractページ:** [arXiv:2406.19003](https://arxiv.org/abs/2406.19003)
- **Introduction:** Section 1, pp. 1–3
- **Introduction中で言及された主要定理番号:** Theorem 2, Proposition 3.1（Section 3で詳述）
- **論文構成の説明:** Section 1.1, p. 2
- **確認したarXivバージョン:** v2
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
