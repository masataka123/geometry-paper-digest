---
layout: paper
title: Irrational families of Fano weighted complete intersection fourfolds
title_ja: 重み付き完全交差Fano四次元多様体の全メンバーの非有理性
authors: Jiaji Cai, Andrew Harder, Sukjoo Lee
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.SG
arxiv_abstract: We study the irrationality of smooth Fano complete intersection fourfolds in weighted projective spaces, using an atom theoretic approach based solely on Gromov--Witten invariants. We prove symplectic irrationality, and hence irrationality for every smooth member, in a wide range of families for which irrationality was previously known only for very general members.
topic: algebraic-geometry
tags:
- fano-varieties
- birational-geometry
- symplectic-contact-geometry
- algebraic-cycles-enumerative
arxiv_id: 2610.18489v1
arxiv_url: https://arxiv.org/abs/2610.18489
arxiv_submitted: '2026-10-13'
arxiv_updated: '2026-10-13'
summary: 重み付き射影空間内の滑らかなwell-formed Fano完全交差四次元多様体について、族の全ての滑らかなメンバーの非有理性を調べる。Gromov–Witten不変量によるformal atomを用い、17族でsymplectic非有理性を示し、既知の1族と合わせて18族の非有理性を得る。
abstract_en: ''
summary_en: The work seeks rationality obstructions that remain effective for every smooth member of a family. It studies quantum connections through formal atoms, without retaining the Hodge data used in earlier approaches. Blow-up formulas restrict the atoms available to a symplectically rational fourfold. For the specified weighted complete intersection families, the authors use these restrictions to strengthen very-general-member conclusions.
abstract_ja: 22族に分類される滑らかなwell-formed Fano重み付き完全交差四次元多様体のうち、18族の全メンバーが非有理であるという結論を与える。新たな議論は17族のsymplectic非有理性を示し、残る1族には既存の非有理性定理を使う。formal atomの大きさ、Jordan型、指数を低次元blow-up中心から生じるものと比較することで、Hodgeデータに依存しない障害を構成する。
abstract_source_url: https://arxiv.org/abs/2610.18489
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.18489v1](https://arxiv.org/abs/2610.18489)
- **著者:** Jiaji Cai, Andrew Harder, Sukjoo Lee
- **初回投稿日:** 2026-10-13
- **最終更新日:** 2026-10-13
- **主分類・副分類:** math.AG（主分類）; math.SG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

ある族の非常に一般の多様体が非有理であることと、全ての滑らかなメンバーが非有理であることには差がある。特殊なメンバーに有理な例が存在し得るためである。本論文は、重み付き射影空間内のFano完全交差四次元多様体で、この差を埋めることを目指す。

用いるのは、Gromov–Witten理論から構成する量子接続のformal atomである。Hodgeデータを保持しない代わりに、量子接続の変形やmonodromyを詳しく制御し、全メンバーに適用できる障害を得る。

対象となる22族のうち、17族についてsymplecticな意味での非有理性を示す。これは代数的非有理性を含意する。さらに、別の先行研究ですでに非有理性が知られる1族を加え、18族の全ての滑らかなメンバーが非有理であるという結論をまとめる。

残る4族は同じ結論に含まれない。二次超曲面と二つの二次式の完全交差は常に有理で、三次超曲面と三つの二次式の完全交差には有理な滑らかなメンバーが存在する。この区別は、Fano指数と最大次数による数値的判定の形でも説明される。

## 背景と問題設定

symplectically rationalとは、射影空間からsymplectic blow-up、blow-down、変形を有限回行って到達できることをいう。豊富な偏極が定めるsymplectic構造を持つ滑らかな射影多様体では、弱分解定理により代数的有理性がsymplectic有理性を導く。したがって後者を否定することは、より強い非有理性障害となる。

$X=X\_{d\_1,\ldots,d\_c}\subset\mathbb P(a\_0,\ldots,a\_{m+c})$を、linear coneとの交差ではない滑らかなwell-formed Fano重み付き完全交差とする。Introductionの数値量は

$$
\iota=\sum\_i a\_i-\sum\_jd\_j,\qquad
d\_{\max}=\max\_jd\_j,\qquad
\sigma(X)=\dim X-\frac{2\iota}{d\_{\max}}
$$

である。Question 1.4は、$\sigma(X)>\dim X-2$、すなわち$\iota<d\_{\max}$が非有理性を導くかを問う。

## 主結果

### 全メンバーの非有理性（Theorem 1.1）

22族の滑らかなwell-formed Fano重み付き完全交差四次元多様体のうち、次の4族を除く18族では全ての滑らかなメンバーが非有理となる。

$$
X\_2\subset\mathbb P^5,\qquad X\_{2,2}\subset\mathbb P^6,
\qquad X\_3\subset\mathbb P^5,\qquad X\_{2,2,2}\subset\mathbb P^7.
$$

18族のうち、$X\_{2,6}\subset\mathbb P(1^6,3)$を除く17族についてはsymplectic非有理性を証明する。例外の$X\_{2,6}$族の非有理性はPukhlikovによる既知の結果であり、Remark 1.2は今回の証明がこの1族を新しく扱うものではないと明記する。

主張は「非常に一般のメンバー」から「全ての滑らかなメンバー」への強化である。ただし、個別の族にはすでに全メンバーの非有理性が知られていたものもあり、18族の各結論が全て初出という意味ではない。

### 数値条件との対応（Corollary 1.5）

同じ22族に限ると、上の数値量で有理性の様相が整理される。$\sigma(X)>2$なら全ての滑らかなメンバーが非有理であり、$\sigma(X)=2$なら有理なメンバーと非有理なメンバーの双方が存在する。$\sigma(X)=0,1$なら全ての滑らかなメンバーが有理である。

これはQuestion 1.4の四次元の場合を肯定する。任意の次元・任意のFano多様体への数値的判定を証明したという主張ではない。

## 証明の見取り図

big quantum connectionを形式分解した各成分がformal atomとなる。各atomには重複度、Euler元による量子積のJordan型、接続の形式型を対応させる。Iritaniのquantum blow-up公式とそのsymplectic版により、余次元$r$の滑らかな中心$Z$のblow-upでは、概略

$$
\operatorname{At}(\widetilde X)\simeq
\operatorname{At}(X)\sqcup\bigsqcup\_{j=0}^{r-2}\operatorname{At}(Z)
$$

という関係が成立する。symplectically rationalな四次元多様体のatomは、射影4空間と、点・曲線・曲面という低次元中心のatomから作れるはずである。この制約と両立しないatomを見つける。

計算しやすいsmall quantum connectionから出発し、ambient方向の変形ではEulerベクトル場の量子べきによる流れを用いる。primitive方向ではmonodromy reductionによってGromov–Wittenポテンシャルの変数依存を一つに縮約する。17族ではprimitive cohomology上の直交monodromyが、特定のatomに大きな自明成分を残す。

最後はFano指数ごとに異なる。指数3では大きさとJordan型、指数2では分裂しないatomの非整数の指数、指数1では強制される分裂とFrobenius恒等式の不整合を使う。これらはIntroductionが説明する証明の経路であり、後続節の計算や証明全体を検証したものではない。

## 原論文との対応

- **Abstractページ:** [Irrational families of Fano weighted complete intersection fourfolds](https://arxiv.org/abs/2610.18489)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.18489v1) — Section 1, pp. 1–4（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorem 1.1; Remarks 1.2–1.3; Question 1.4; Corollary 1.5
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.18489v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source_scope:** Abstract and Introduction
