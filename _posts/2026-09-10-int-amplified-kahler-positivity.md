---
layout: paper
title: "Positivity of compact Kähler varieties admitting an int-amplified endomorphism"
title_ja: "int-amplified自己準同型を持つコンパクトKähler多様体の正値性"
authors: "Shin-ichi Matsumura, Guolei Zhong"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
  - math.CV
  - math.DS
arxiv_abstract: >-
  We study compact Kähler varieties admitting int-amplified endomorphisms from the viewpoint of positivity of tangent sheaves. Our main result shows that the tangent sheaf of such a variety is weakly positively curved; in particular, it is pseudo-effective in a strong sense. This establishes a new link between complex dynamics and the positivity theory of tangent sheaves, and provides an alternative to equivariant MMP techniques in the compact Kähler setting. As an application, we prove a Kähler analogue of Yoshikawa's structure theorem: for a compact Kähler klt variety admitting an int-amplified endomorphism, after an equivariant quasi-étale cover, it admits an equivariant flat MRC fibration with irreducible fibres onto a complex torus; in the smooth case, the fibration is smooth whose periodic fibres are of Fano type. To this end, we prove the existence of minimal models in the case of numerical dimension zero canonical divisors for non-projective Kähler varieties. We further study rationally connected manifolds with pseudo-effective tangent bundle, focusing on their relation to Fano-type properties, almost homogeneity, and fundamental groups. In the proof, we also show that every surjective endomorphism of a compact klt Kähler variety lifts to a suitable maximally quasi-étale cover.
topic: algebraic-geometry
tags:
  - positivity
  - vector-bundles-sheaves
  - birational-geometry
  - minimal-model-program
  - singularities
arxiv_id: "2609.09869v1"
arxiv_url: "https://arxiv.org/abs/2609.09869"
arxiv_submitted: "2026-09-09"
arxiv_updated: "2026-09-09"
summary: >-
  int-amplified自己準同型を持つ正規コンパクトKähler多様体の接層が弱正曲率を持ち、強い意味で擬有効となることを示す。kltの場合には準エタール被覆後の平坦なMRC fibrationを得て、一般の同変Kähler MMPに依存しない構造理論を与える。
abstract_en: ""
summary_en: >-
  The paper connects expanding holomorphic dynamics on compact Kähler varieties with positivity of their tangent sheaves. It proves that an int-amplified endomorphism forces a strong pseudo-effectivity property, providing a replacement for equivariant minimal-model arguments that are unavailable in general Kähler geometry. For klt spaces, this positivity leads after a suitable cover to a flat maximal rationally connected fibration over a complex torus. Further consequences concern minimal models, fundamental groups, Fano-type fibers, and lifting endomorphisms to maximally quasi-étale covers.
abstract_ja: >-
  int-amplified自己準同型を持つコンパクトKähler多様体を接層の正値性から研究する。主結果は接層が弱正曲率を持ち、とくに強い意味で擬有効であることを示す。応用として、コンパクトKähler klt多様体は同変準エタール被覆の後、複素torus上の既約ファイバーを持つ同変平坦MRC fibrationを備える。滑らかな場合、この射は滑らかで周期的ファイバーはFano型である。さらに数値次元零の標準因子に対する極小モデルの存在や、自己準同型を適切な最大準エタール被覆へ持ち上げる結果も得る。
abstract_source_url: "https://arxiv.org/abs/2609.09869"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報
- **arXiv:** [arXiv:2609.09869](https://arxiv.org/abs/2609.09869)
- **著者:** Shin-ichi Matsumura, Guolei Zhong
- **初回投稿日:** 2026年9月9日
- **最終更新日:** 2026年9月9日
- **主分類・副分類:** math.AG（主分類）, math.CV, math.DS
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

非同型な全射自己準同型を許すコンパクト複素多様体の幾何を理解することは複素力学の基本問題である。射影的なint-amplified自己準同型では同変MMPが構造理論を支えるが、一般のコンパクトKähler多様体では必要なMMPがまだ揃っていない。

本論文は「自己準同型が接層の正値性を強制する」という別経路を提示する。int-amplifiedとは、あるKähler類$[\omega]$について$f^*[\omega]-[\omega]$が再びKähler類となる全射自己準同型である。

第一の主結果は、正規コンパクトKähler多様体の接層$T_X$が弱正曲率を持つことを示す。この擬有効性はGrothendieck射影化上の$\mathcal O_{\mathbb P(T_X)}(1)$だけを用いる擬有効性より強い。

klt特異点を仮定すると、この正値性から準エタール被覆後の平坦なMRC fibrationが導かれる。基底は複素torus、ファイバーは既約であり、滑らかな場合には射も滑らかで周期的ファイバーはFano型となる。

## 背景と問題設定

射影の場合、int-amplified自己準同型と同変MMPを組み合わせると、最終的に$\mathbb Q$-abelian多様体へ至る収縮列が得られる。Kählerの場合の代替案は、接層の擬有効性に対する既存の構造定理を力学から利用可能にすることである。本論文の論理をIntroductionは「自己準同型 $⇒$ 接層の正値性 $⇒$ 構造定理」と要約する。

## 主結果

### 接層の正値性（Theorem 1.1）

正規コンパクトKähler多様体$X$がint-amplified自己準同型を持てば、反射的接層$T_X:=\Omega_X^\vee$は弱正曲率を持つ。したがって$T_X$は論文のDefinition 2.3の意味で擬有効である。この結論はPicard数1のFano多様体のような基本例でも新しい。

### Kähler版構造定理（Theorem 1.2）

コンパクトKähler klt多様体$X$とint-amplified自己準同型$f$に対し、$f$-同変な準エタール被覆を取れば、複素torus $T$への平坦な正則射影MRC fibration

$$
\pi:X\longrightarrow T
$$

が存在する。全ファイバーは既約で、$\dim T=\widetilde q(X)$である。$X$が滑らかなら$\pi$は滑らかで、$f$-周期的ファイバーはFano型である。

### 被覆への持ち上げ（Theorem 1.6）

コンパクトKähler klt多様体の任意の全射自己準同型は、適切な最大準エタール被覆へ反復を取らずに持ち上がる。これは構造定理でtorus部分と有理連結部分を同変に分離するための要点である。

## 証明の見取り図

Theorem 1.1で力学的な膨張条件から接層の弱正曲率を得る。次に、数値次元零の標準因子を持つ非射影Kähler klt多様体について極小モデルの存在を示し、接層が擬有効な多様体の構造定理を無条件化する。これらを合わせてtorusへの正則MRC fibrationを構成し、力学を用いて同変性、全ファイバーの既約性、平坦性を導く。

## 原論文との対応
- **Abstractページ:** [arXiv:2609.09869](https://arxiv.org/abs/2609.09869)
- **Introduction:** Section 1, pp. 1--6
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2, 1.5, 1.6; Corollaries 1.4, 1.7
- **論文構成の説明:** Remark 1.3, p. 4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
