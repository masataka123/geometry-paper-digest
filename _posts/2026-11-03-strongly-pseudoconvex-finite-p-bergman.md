---
layout: paper
title: Strongly Pseudoconvex Domains with Finite Dimensional $p$-Bergman Spaces
title_ja: 有限次元p-Bergman空間を持つ強擬凸領域
authors: Shreedhar Bhat, Soumya Ganguly, Achinta Kumar Nandi
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: We show that for every $n\ge2$, $p>2$, and positive integer $m$, there exists a finite-volume pseudoconvex domain $D\subset\mathbb C^n$ with real-analytic strongly pseudoconvex boundary whose $p$-Bergman space $A^p(D)$ has dimension $m$. These domains admit smooth strictly plurisubharmonic exhaustions and satisfy $H^\infty(D)=\mathbb C$ and $\dim A^s(D)=\infty$ for every $0<s\le2$. Moreover, for every finite $s\ge p$, we have $\dim A^s(D)=\lceil pm/s\rceil$. As an application, we show that the Bergman projection fails to map $\mathcal{C}_c^\infty(D)$ into $A^p(D)$ and admits no bounded extension to $L^s(D)$ or $L^{s/(s-1)}(D)$ for any finite $s\ge p$.
topic: several-complex-variables
tags:
- stein-geometry
- pluripotential-theory
arxiv_id: 2611.00501v1
arxiv_url: https://arxiv.org/abs/2611.00501
arxiv_submitted: '2026-10-31'
arxiv_updated: '2026-10-31'
summary: 強擬凸で実解析的な境界を持つ領域でも、pが2より大きいとp-Bergman空間が任意の正の有限次元になりうることを示す。有限体積を保った構成により、指数ごとの次元とBergman射影の非有界性も記述する。
abstract_en: ''
summary_en: The paper constructs unbounded domains whose boundary geometry is very regular but whose holomorphic integrability changes sharply with the exponent. The prescribed finite dimension occurs above exponent two, while the Hilbert Bergman space remains infinite-dimensional. A constant-Jacobian coordinate change improves the boundary without changing the unweighted integrability problem. The examples also obstruct boundedness of the classical Bergman projection.
abstract_ja: 任意の複素次元n≥2、指数p>2、正整数mに対し、p乗可積分な正則関数の空間がちょうどm次元となる有限体積擬凸領域を構成する。境界は至る所実解析的かつ強擬凸にでき、滑らかな強多重劣調和排気関数も存在する。一方、指数が2以下のBergman空間は無限次元であり、有界正則関数は定数だけである。高い指数側の次元公式とBergman射影の非有界性を得る。
abstract_source_url: https://arxiv.org/abs/2611.00501
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.00501v1](https://arxiv.org/abs/2611.00501)
- **著者:** Shreedhar Bhat, Soumya Ganguly, Achinta Kumar Nandi
- **初回投稿日:** 2026-10-31
- **最終更新日:** 2026-10-31
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

有界領域では正則多項式がすべて可積分なので、p-Bergman空間は無限次元になる。非有界領域では無限遠での可積分性が強く制限され、有限次元の可能性が生じる。本論文は境界を強擬凸かつ実解析的に保って、その次元を指定する。

任意の $p>2$ と正整数 $m$ に対し、$\dim A^p=m$ となる有限体積領域を複素次元2以上で構成する。他方、同じ領域の $A^2$ は無限次元である。従って「強擬凸ならすべての指数で無限次元」という結論は成り立たない。

構成はさらに、指数を変えた際の次元を明示し、Bergman射影の $L^p$ 正則性が失われる例を与える。通常の有界強擬凸領域の直観に対し、非有界性と無限遠での関数の振る舞いが不可欠となる。

## 背景と問題設定

Euclid体積に関して

$$
A^p(D)=\lbrace f\in\mathcal O(D):\int\_D|f|^p\thinspace dV\_{2n}<\infty\rbrace
$$

と定める。$p=2$ ではHilbert空間としてBergman核と直交射影を持つ。序論は、擬凸領域での零または無限次元という問題に関する先行研究と、指数が2を境に異なる振る舞いを持つことを背景に置く。

## 主結果

### Hartogs領域での指定次元（Theorem 1.1）

$n\geq2$、$m\geq1$、$p>2$ に対し、滑らかな強多重劣調和排気関数を持つ有限体積擬凸Hartogs領域 $\Omega$ が存在し、底座標 $z$ について

$$
A^p(\Omega)=\operatorname{span}\_{\mathbb C}\lbrace 1,z,\ldots,z^{m-1}\rbrace ,
\qquad H^\infty(\Omega)=\mathbb C
$$

となる。$0<s\leq2$ では $\dim A^s(\Omega)=\infty$ であり、有限の $s\geq p$ では

$$
A^s(\Omega)=\operatorname{span}\_{\mathbb C}\lbrace z^j:j\geq0,\ sj<pm\rbrace ,
\qquad\dim A^s(\Omega)=\left\lceil\frac{pm}{s}\right\rceil
$$

が成り立つ。中間の $2<s<p$ にまでこの公式を延長して述べるものではない。

### 至る所強擬凸な実解析的境界（Theorem 1.2）

同じ $n,p,m$ に対し、境界が至る所実解析的かつ強擬凸で、$\dim A^p(D)=m$ となる有限体積擬凸領域 $D$ を得る。滑らかな強多重劣調和排気関数を持ち、$H^\infty(D)=\mathbb C$、$\dim A^s(D)=\infty$（$0<s\leq2$）も成り立つ。

第1座標 $u$ は零にならず、有限の $s\geq p$ では

$$
A^s(D)=\operatorname{span}\_{\mathbb C}\lbrace u^{-j}:j\geq0,\ sj<pm\rbrace ,
\qquad\dim A^s(D)=\left\lceil\frac{pm}{s}\right\rceil
$$

となる。

### Bergman射影の非有界性

$A^2$ が無限次元で $A^p$ が有限次元なら、Bergman射影は $C\_c^\infty$ 全体を $A^p$ へ写さない。構成した例では、有限のすべての $s\geq p$ について $L^s$ および $L^{s/(s-1)}$ 上への有界な延長が存在しないと序論は述べる。

## 証明の見取り図

Hartogsファイバー方向に正則関数を展開し、底上の重み付き可積分性へ帰着する。対数特異点を配置してファイバー変数を含む項を消し、無限遠の重みで残る底変数の多項式の次数を制限する。

次に有理shearに着想を得た正則座標変換で、境界の例外点を除く。Jacobianを定数に保つことで、重みなしのp乗可積分性と次元を保存する。対数特異点の構成には $p>2$ が必要であり、$p=2$ の有限次元例を与える議論ではない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.00501)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.00501v1) — Section 1, pp. 1–4
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2; Bergman射影への応用
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.00501v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
