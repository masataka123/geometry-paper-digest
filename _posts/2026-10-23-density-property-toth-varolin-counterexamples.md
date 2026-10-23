---
layout: paper
title: A new class of smooth algebraic varieties with the density property and a counterexample to the Tóth-Varolin Conjecture
title_ja: Density propertyを持つアフィン四次元多様体とTóth–Varolin予想への反例
authors: Sushil Gorai
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.AG
arxiv_abstract: We prove that the smooth affine hypersurfaces \[ X_{m,n}=\{\zeta^mz_0^n+ (1+z_1\zeta)z_2+\zeta z_3^2=1\}\subset\mathbb{C}^5,\;\; m,n\geq 2, \] have the density property. For every odd integer $d\geq 3$, we identify $X_{d-1,d}$ with a Kaliman modification along a Brieskorn variety of type $(d,2,2,2)$. We prove that the fourfolds $X_{d-1,d}$ are diffeomorphic to $\mathbb{C}^4$ but not biholomorphic to $\mathbb{C}^4$. These, therefore, give counterexamples to the T\'{o}th-Varolin conjecture.
topic: several-complex-variables
tags:
- stein-geometry
- symplectic-contact-geometry
arxiv_id: 2610.27660v1
arxiv_url: https://arxiv.org/abs/2610.27660
arxiv_submitted: '2026-10-20'
arxiv_updated: '2026-10-20'
summary: 完備正則ベクトル場が豊富に存在するdensity propertyを持つ滑らかなアフィン四次元多様体の族を構成する。その一部はC⁴と微分同相でありながら双正則ではなく、Tóth–Varolinの認識予想への反例を与える。Kaliman modificationとの同定とシンプレクティック不変量が、正則な柔軟性と複素構造の違いを分離する。
abstract_en: ''
summary_en: The paper investigates whether a large holomorphic automorphism group and the topology of affine space determine its complex structure. It constructs explicit affine hypersurfaces with the density property. A subfamily has the smooth topology of complex four-space but a different biholomorphic type. The distinction uses a link to Kaliman modifications and symplectic homology.
abstract_ja: m,n≥2に対するアフィン超曲面Xm,n={ζ^m z0^n+(1+z1ζ)z2+ζz3²=1}⊂C⁵が滑らかでdensity propertyを持つことを示す。奇数d≥3ではXd−1,dを型(d,2,2,2)のBrieskorn多様体に沿うKaliman modificationと同定する。この四次元多様体はC⁴と微分同相だが双正則ではなく、Tóth–Varolin予想への反例となる。
abstract_source_url: https://arxiv.org/abs/2610.27660
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.27660v1](https://arxiv.org/abs/2610.27660)
- **著者:** Sushil Gorai
- **初回投稿日:** 2026-10-20
- **最終更新日:** 2026-10-20
- **主分類・副分類:** math.CV（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Stein多様体のdensity propertyは、完備正則ベクトル場から生成されるLie代数が、すべての正則ベクトル場に稠密になるという強い柔軟性である。Tóth–Varolin予想は、この性質と複素アフィン空間と同じ滑らかな位相を組み合わせれば、複素構造までアフィン空間に一致するのではないかと問う。

本論文は、明示的な方程式で与えられる滑らかなアフィン四次元多様体の族にdensity propertyを証明する。そのうち奇数パラメータに対応する族はC⁴と微分同相だが、C⁴とは双正則でないと示す。したがってこの認識予想に否定的な答えを与える。

重要なのは、代数的に同型でないというだけでなく、正則写像によっても同一視できない点である。論文は既存のKaliman modificationとシンプレクティックホモロジーの結果へ接続し、自己同型群の豊富さと複素構造の認識を切り分ける。

## 背景と問題設定

density propertyでいう完備性は、正則ベクトル場の流がすべての複素時間で定義されることを指す。完全なベクトル場のLie代数的な生成で、任意の正則ベクトル場をコンパクト開位相において近似できる。この性質はAndersén–Lempert理論を支える自己同型群の大きさと結びつく。

Introductionは、C³と微分同相だが代数的には同型でないKoras–Russell cubicを関連例に挙げる。そのdensity propertyは既知だが、C³との双正則性はそこで未解決問題として説明される。本論文の新しい四次元族は、双正則性まで区別できるように設計される。

## 主結果

### アフィン超曲面のdensity property（Theorem 1.1）

任意の整数$m,n\geq2$について

$$
X\_{m,n}=\lbrace (\zeta,z\_0,z\_1,z\_2,z\_3)\in\mathbb C^5:
\zeta^m z\_0^n+(1+z\_1\zeta)z\_2+\zeta z\_3^2=1\rbrace
$$

は複素次元4の滑らかな多様体で、正則density propertyを持つ。結論は正則ベクトル場についての密度であり、ここで代数的density propertyへ強めて解釈しない。

### Kaliman modificationとの同定（Theorem 1.3）

$d\geq3$について

$$
P\_d(r,a,b,c)=r^d+ab+c^2,\qquad Z\_d=P\_d^{-1}(0),\qquad p=(0,1,0,0)
$$

と置くと、アフィン代数多様体として

$$
X\_{d-1,d}\simeq\operatorname{Kalmod}(\mathbb C^4,Z\_d,\lbrace p\rbrace )
$$

となる。とくに$d=7$は線形座標変換後にMcLeanの構成する四次元多様体に対応する。この同定が、明示的な方程式の族を既知の位相・シンプレクティック幾何へ結びつける。

### 明示的な反例（Theorem 1.4）

$$
X\_{6,7}=\lbrace \zeta^6z\_0^7+(1+z\_1\zeta)z\_2+\zeta z\_3^2=1\rbrace \subset\mathbb C^5
$$

は、C⁴と微分同相、density propertyを持つ、C⁴と双正則ではない、という三つの性質を同時に持つ。したがって、位相的条件と正則ベクトル場の豊富さだけではC⁴を認識できない。

### 奇数パラメータの反例族（Theorem 1.5）

任意の奇数$d\geq3$に対して$X\_{d-1,d}$も上の三つの性質を満たす。単独の例ではなく、明示的にパラメータ化された反例族である。

## 証明の見取り図

Introductionはdensity propertyの判定に使われるcompatible pairの方法を背景に挙げ、本文を滑らかさと既約性、density property、Kaliman modificationとの同定、反例の証明の順に構成する。

双正則型の区別では、McLeanの構成における非零のシンプレクティックホモロジーが動機となる。対象となる有限型Stein多様体では双正則写像が対応するシンプレクティック構造の性質を保つため、この不変量を通じてC⁴との双正則同一視を排除する、というのがIntroductionで説明される経路である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.27660)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.27660v1) — Section 1、PDF pp. 1–3。
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.3, 1.4, 1.5。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.27660v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
