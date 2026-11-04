---
layout: paper
title: 'Oka-1 manifolds: New examples and properties'
title_ja: Oka-1多様体の新しい例と代数的近似
authors: Franc Forstneric, Finnur Larusson
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AG
arxiv_abstract: In this paper we investigate Oka-1 manifolds and Oka-1 maps, a class of complex manifolds and holomorphic maps recently introduced by Alarc\'on and Forstneri\v{c}. Oka-1 manifolds are characterised by the property that holomorphic maps from any open Riemann surface to the manifold satisfy the Runge approximation and Weierstrass interpolation conditions, while Oka-1 maps enjoy similar properties for liftings of maps from open Riemann surfaces in the absence of topological obstructions. We also formulate and study the algebraic version of the Oka-1 condition, called aOka-1. We show that it is a birational invariant for compact algebraic manifolds and holds for all uniformly rational projective manifolds. This gives a Runge approximation theorem for maps from compact Riemann surfaces to uniformly rational projective manifolds. Finally, we study a class of complex manifolds with an approximation property for holomorphic sprays of discs. This class lies between the smaller class
  of Oka manifolds and the bigger class of Oka-1 manifolds and has interesting functorial properties.
topic: several-complex-variables
tags:
- oka-theory
- birational-geometry
- stein-geometry
arxiv_id: 2402.09798v4
arxiv_url: https://arxiv.org/abs/2402.09798
arxiv_submitted: '2024-02-15'
arxiv_updated: '2024-12-29'
summary: 開Riemann面からの写像に近似と補間を要求するOka-1性を調べ、Stein多様体の領域や双有理幾何から新例を得る。代数的Oka-1性はコンパクト代数多様体で双有理不変となり、有理な多様体などに適用できる。通常のOka性や有理連結性との違いも明確にする。
abstract_en: In this paper we investigate Oka-1 manifolds and Oka-1 maps, a class of complex manifolds and holomorphic maps recently introduced by Alarc\'on and Forstneri\v{c}. Oka-1 manifolds are characterised by the property that holomorphic maps from any open Riemann surface to the manifold satisfy the Runge approximation and Weierstrass interpolation conditions, while Oka-1 maps enjoy similar properties for liftings of maps from open Riemann surfaces in the absence of topological obstructions. We also formulate and study the algebraic version of the Oka-1 condition, called aOka-1. We show that it is a birational invariant for compact algebraic manifolds and holds for all uniformly rational projective manifolds. This gives a Runge approximation theorem for maps from compact Riemann surfaces to uniformly rational projective manifolds. Finally, we study a class of complex manifolds with an approximation property for holomorphic sprays of discs. This class lies between the smaller class
  of Oka manifolds and the bigger class of Oka-1 manifolds and has interesting functorial properties.
summary_en: ''
abstract_ja: Oka-1性は一次元のStein源である開Riemann面からの正則写像に、Runge近似とjet補間を要求する柔軟性である。本論文はdensity propertyをもつStein多様体の適切なsuperlevel領域に新例を与え、代数的なaOka-1性を導入して射影多様体の双有理幾何と結びつける。局所spray近似性を介した強いdominabilityの閉包についても結果を示し、Oka、LSAP、Oka-1の間の含意を整理する。
abstract_source_url: https://arxiv.org/abs/2402.09798
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2402.09798v4](https://arxiv.org/abs/2402.09798)
- **著者:** Franc Forstneric, Finnur Larusson
- **初回投稿日:** 2024-02-15
- **最終更新日:** 2024-12-29
- **主分類・副分類:** math.CV（主分類）; math.AG
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Oka理論は、位相的な障害がなければ正則写像を柔軟に作れる対象を研究する。Oka-1性は、その源を開Riemann面に制限した性質であり、近似と補間を一次元の源に対して要求する。本論文は、この弱めた性質をもつ新しい多様体と写像を調べる。

解析的な方向では、density propertyをもつStein多様体の適切なexhaustionのsuperlevel領域がOka-1となることを示す。代数的な方向では、近似する写像を代数的射に選ぶaOka-1性を導入し、射影多様体の双有理幾何と結びつける。

特に、代数的にellipticな射影多様体と双有理同値な射影多様体はaOka-1となる。この性質は通常のOka-1性を導く一方、射影aOka-1多様体は有理連結でなければならない。楕円曲線のようなOka-1だがaOka-1でない例もある。

さらにOka性とOka-1性の間にある局所spray近似性を使い、強いdominabilityでOka多様体のクラスを閉じてもOka-1性は残ることを示す。これを通常のOka性そのものが同じ操作で保たれるという結果と読み替えることはできない。

## 背景と問題設定

Oka-1多様体$X$では、任意の開Riemann面$R$、Rungeコンパクト集合$K\subset R$、閉離散集合$A$、$K\cup A$の近傍で正則な連続写像$f:R\to X$に対し、同じホモトピー類に属する正則写像$F:R\to X$を選んで

$$
\max\_{p\in K}\operatorname{dist}\_X(F(p),f(p))<\epsilon
$$

とできる。さらに各$a\in A$で指定した有限次数までjetを一致させられる。

aOka-1性では源をアフィン代数的Riemann面とし、有限集合上の補間を伴う近似写像$F$を代数的射に選ぶ。高次元のアフィン源まで要求する既存の代数的Oka性には否定的結果があるが、源を一次元へ限ることで肯定的な理論が得られる。

IntroductionのTheorem 1.3は先行研究からの引用であり、Oka-1写像による性質の移送を述べる既知結果である。以下では本論文の主な新結果と、それを補う命題を区別する。

## 主結果

### Stein多様体内の領域（Theorem 1.4）

$X$がdensity propertyをもつStein多様体で、$\rho:X\to\mathbb R$が$C^2$ Morse exhaustionであり、そのLevi形式が各点で少なくとも二つの正の固有値をもつとする。このときすべてのsuperlevel集合

$$
\lbrace x\in X:\rho(x)>c\rbrace
$$

はOka-1多様体である。境界の内側だけでなく、exhaustionの外側の領域にも豊富な正則曲線を得る結果となる。

### 双有理幾何とaOka-1性（Theorem 1.6）

代数的にellipticな射影多様体と双有理同値な射影多様体はaOka-1である。Introductionでは、コンパクト代数多様体でのaOka-1性の双有理不変性と、有理な多様体および代数的にellipticな多様体に対する結果を合わせた定理として説明される。

この結論は通常のOka性を主張するものではない。aOka-1の「代数的」は写像を代数的射で近似することを指し、任意次元の源を許す強い代数的Oka性とは異なる。

### コンパクトRiemann面からの近似（Corollary 1.8）

$X$がTheorem 1.6の対象ならば、コンパクトRiemann面$\Sigma$のコンパクト集合$K$の近傍で定義された正則写像$f$を、$\Sigma\to X$という大域的な射で任意に近く近似できる。$K$内の有限集合で任意の指定有限次数までjetも一致させられる。Riemann球面を標的とするRoydenのRunge近似定理を、より広い射影的な標的へ拡張する結果である。

### 有理連結性・通常のOka-1性との関係（Propositions 1.7 and 1.9）

射影aOka-1多様体は有理連結である。また任意のaOka-1多様体はOka-1である。前者は、二点を通る円板を代数的な$\mathbb C$からの射で補間し、射影性によって$\mathbb P^1$へ延長する議論から分かる。

逆に、すべての有理連結射影多様体がOka-1であるという主張は、この論文のIntroductionでは予想として扱われる。楕円曲線はOka-1だが有理連結でないため、aOka-1ではない。この違いが両概念を区別する。

### 強いdominabilityによる閉包（Theorem 1.11）

すべてのOka多様体を含み、強いdominabilityで閉じた最小のクラス$\mathcal C$を考える。そのすべての多様体は局所spray近似性LSAPをもち、したがってOka-1である。

ここで強いdominabilityとは、対象の各点の上でsubmersionとなる正則写像を、クラス内の何らかの多様体から得られるという条件である。

$$
\text{Oka}\ \Longrightarrow\ \text{LSAP}\ \Longrightarrow\ \text{Oka-1}
$$

という含意が働くが、Oka多様体のクラス自体やOka-1多様体全体が強いdominabilityで閉じるかは、この時点では未解決として述べられる。

## 証明の見取り図

代数的な主結果では、aOka-1性の双有理不変性と、代数的にellipticな標的への多径数ホモトピー近似を組み合わせる。一次元の源に絞ることで、高次元の代数的Oka条件の障害を避けられる。

aOka-1からOka-1への移行には、開Riemann面のコンパクトな滑らかな境界付き領域をアフィンRiemann面内の領域として扱い、近似を帰納的に続ける議論を用いる。最後の結果ではLSAPの関手的性質が、強いdominabilityの閉包において近似性を保持する役割を担う。後続節のspray構成の詳細を本記事では再構成していない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2402.09798)
- **Introduction:** [PDF](https://arxiv.org/pdf/2402.09798v4) — Section 1, pp. 1–5
- **Introduction中で言及された主要結果:** Theorems 1.4, 1.6, 1.11; Corollary 1.8; Propositions 1.7, 1.9（Theorem 1.3は既知結果として記載）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2402.09798v4
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
