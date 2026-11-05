---
layout: paper
title: Oka-1 manifolds
title_ja: 開Riemann面からの正則写像に対するOka-1多様体
authors: Antonio Alarcon, Franc Forstneric
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: In this paper we begin a systematic study of the class of complex manifolds which are universal targets of holomorphic maps from open Riemann surfaces. We call them Oka-1 manifolds, by analogy with Oka manifolds that are universal targets of holomorphic maps from Stein manifolds of arbitrary dimension. We prove that every complex manifold which is dominable at most points by spanning tubes of complex lines in affine spaces is an Oka-1 manifold. In particular, a manifold dominable by $\mathbb{C}^n$ at most points is an Oka-1 manifold. We provide many examples of Oka-1 manifolds among compact complex surfaces, including all Kummer surfaces and all elliptic K3 surfaces. We show that the class of Oka-1 manifolds is invariant under Oka-1 maps inducing a surjective homomorphism of fundamental groups; this includes holomorphic fibre bundles with connected Oka fibres. In another direction, we prove that every bordered Riemann surface admits a holomorphic map with dense image in any
  connected complex manifold. The analogous result is shown for holomorphic Legendrian immersions in an arbitrary connected complex contact manifold.
topic: several-complex-variables
tags:
- oka-theory
- stein-geometry
- hyperbolicity
arxiv_id: 2303.15855v5
arxiv_url: https://arxiv.org/abs/2303.15855v5
arxiv_submitted: '2023-03-28'
arxiv_updated: '2025-04-10'
summary: 任意の開Riemann面からの写像について近似と補間を伴うOka原理を満たすOka-1多様体を導入する。複素直線の管状領域によるdominabilityからこの性質を導き、複素曲面の例やOka写像に関する不変性を示す。
abstract_en: In this paper we begin a systematic study of the class of complex manifolds which are universal targets of holomorphic maps from open Riemann surfaces. We call them Oka-1 manifolds, by analogy with Oka manifolds that are universal targets of holomorphic maps from Stein manifolds of arbitrary dimension. We prove that every complex manifold which is dominable at most points by spanning tubes of complex lines in affine spaces is an Oka-1 manifold. In particular, a manifold dominable by $\mathbb{C}^n$ at most points is an Oka-1 manifold. We provide many examples of Oka-1 manifolds among compact complex surfaces, including all Kummer surfaces and all elliptic K3 surfaces. We show that the class of Oka-1 manifolds is invariant under Oka-1 maps inducing a surjective homomorphism of fundamental groups; this includes holomorphic fibre bundles with connected Oka fibres. In another direction, we prove that every bordered Riemann surface admits a holomorphic map with dense image in any
  connected complex manifold. The analogous result is shown for holomorphic Legendrian immersions in an arbitrary connected complex contact manifold.
summary_en: ''
abstract_ja: 任意の開Riemann面からの正則写像を豊富に受け入れる複素多様体としてOka-1多様体を研究する。アフィン空間内の複素直線からなるspanning tubeによるdominabilityを十分条件とし、特に大部分の点で複素アフィン空間によりdominateされる場合を含む。Kummer曲面や楕円K3曲面などの例を与え、基本群に全射を誘導するOka-1写像のもとでの不変性を示す。別の結果として、任意のbordered Riemann面から任意の連結複素多様体への稠密像を持つ正則写像、および接触多様体へのLegendrian immersionを構成する。
abstract_source_url: https://arxiv.org/abs/2303.15855v5
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2303.15855v5](https://arxiv.org/abs/2303.15855v5)
- **著者:** Antonio Alarcon, Franc Forstneric
- **初回投稿日:** 2023-03-28
- **最終更新日:** 2025-04-10
- **主分類・副分類:** math.CV（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Oka多様体は、任意次元のStein多様体からの正則写像に対する柔軟性を持つ。本論文のOka-1多様体は、写像の始域を開Riemann面に限定した概念である。連続写像を同じホモトピー類の正則写像へ変える際に、コンパクト集合上の近似と離散点でのjet補間を同時に要求する。

この制限によって、通常のOka性より弱い幾何学的条件から柔軟性を得られる。主な十分条件は複素直線のspanning tubeによるdominabilityであり、複素アフィン空間によるdominabilityを持つ多様体を広く含む。従来の複素曲面に関する結果と組み合わせ、Kummer曲面や楕円K3曲面を例として得る。

Oka-1性は通常のOka性と同値ではなく、パラメータ付きOka原理も定義から自動的には含まれない。一方、基本群に全射を誘導する適切なOka写像のもとで保存されるなど、独自の構造を持つ。この記事はv5のIntroductionが述べる証明済みの結果と、そこで予想として残されている問題を区別する。

## 背景と問題設定

連結複素多様体$X$がOka-1であるとは、次の近似・補間が可能なことをいう（Definition 1.1）。$R$を開Riemann面、$K\subset R$をコンパクトRunge集合、$a\_i$を重複のない離散点列とする。$K\cup\lbrace a\_i\rbrace $の近傍で正則な連続写像$f:R\to X$、$\epsilon>0$、正整数$k\_i$を与えると、$f$とホモトピックな正則写像$F:R\to X$が存在して

$$
\sup\_{p\in K}\operatorname{dist}\_X(F(p),f(p))<\epsilon
$$

を満たし、各$a\_i$で$f$と$k\_i$次まで一致する。ここでRunge条件は$R\setminus K$が相対コンパクトな連結成分を持たないことを意味する。

すべてのOka多様体はOka-1であるが、逆は成り立たない。Introductionは$\mathbb C^2$内のある離散集合の補集合がOka-1でありながら$\mathbb C^2$でdominateされず、したがってOkaではない例を挙げる。Oka-1性からはKobayashi擬計量の消失や、任意の開Riemann面からの稠密像を持つ正則写像の存在が従う。

## 主結果

### Dominabilityによる十分条件（Theorem 2.2, Corollary 2.5）

Introductionでは概略として、アフィン空間の複素直線からなるspanning tubeによって大部分の点でdominateされる複素多様体はOka-1になると述べられている。例外集合の精密な条件とtubeの定義は後続節に委ねられているため、ここでは補わない。

Introductionに明記される特別な場合は、Zariski開領域のすべての点で$\mathbb C^n$からdominateされる多様体である。この場合にもOka-1性が従い、特に$\mathbb C^n$によって代数的にdominateされる連結代数多様体はOka-1となる。これは通常のOka性を結論する主張ではない。

### 円板の付加による局所判定（Proposition 2.7）

Oka-1性を得るには、開Riemann面内の区分的に滑らかな境界を持つコンパクト集合$K$に対し、境界弧に沿ってコンパクト円板$D$を付け加える操作で正則写像を近似拡張できれば十分となる。つまり

$$
L=K\cup D
$$

の近傍へ写像を延長し、$K$上で元の写像を近似する局所的な操作が、大域的な近似・補間へつながる。通常のOka理論の凸近似性に似るが、ここでは1次元で位相的に非自明な領域を扱う。

### 写像のもとでの不変性（Theorem 7.6, Corollary 7.9）

基本群に全射を誘導するOka写像、さらに論文で定義するOka-1写像のもとでOka-1性が不変になる。具体的には、連結なOkaファイバーを持つ正則ファイバー束$h:X\to Y$に対し

$$
X\text{ がOka-1}\quad\Longleftrightarrow\quad Y\text{ がOka-1}
$$

が成り立つ。ファイバーの連結性やOka性を除いた一般の正則写像への主張ではない。また滑らかな族においてOka-1性は一般に開でも閉でもない例が示される。

### 曲面の例と稠密正則曲線

Introductionによれば、すべてのKummer曲面と楕円K3曲面はOka-1であり、Kodaira次元1および$-\infty$の曲面にも多くの例がある。一方、有理連結射影多様体全体のOka-1性は、この版では予想として議論される。

別方向の結果として、任意のbordered Riemann面から任意の連結複素多様体への稠密像を持つ正則写像を得る。複素接触多様体ではLegendrian immersionについても同様の結果がある。始域をbordered Riemann面に限定するこの主張だけで、任意の複素多様体がOka-1になるわけではない。

## 証明の見取り図

複素直線の木とその管状領域を利用し、まず小さなbumpを越えた近似拡張と環状領域を越えた拡張を準備する。円板付加の判定を通じてこれらを組み合わせ、開Riemann面上の大域的なOka-1原理へ進む。曲面の例ではBuzzard–Luによるdominabilityの研究などをこの十分条件と結び付ける。Introductionは局所spray近似性というHausdorff局所的な条件も導入するが、その関手的性質には未解決部分があるとする。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2303.15855v5)
- **Introduction:** [PDF](https://arxiv.org/pdf/2303.15855v5) — Section 1, pp. 1–4（Section 2の直前まで）
- **Introduction中で言及された主要結果:** Definition 1.1; Introductionで説明されるTheorem 2.2, Corollary 2.5, Proposition 2.7, Theorem 7.6, Corollary 7.9
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2303.15855v5
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
