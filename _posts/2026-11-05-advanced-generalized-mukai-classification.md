---
layout: paper
title: On Fujita's Advanced Generalized Mukai Conjecture
title_ja: 藤田の強化一般化向井予想とFano多様体の分類
authors: Duo Li
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove Fujita's advanced generalized Mukai conjecture for smooth complex Fano varieties. Our starting point is the existence of independent two-point Gromov--Witten correspondences. We show that there are finitely many unsplit families of rational curves whose chains connect $X$. We use these families to bound the anticanonical degrees throughout the successive minimal horizontal construction, so every family in that construction is unsplit. Fujita's contraction theorem and inductive classification then give the required list of varieties.
topic: algebraic-geometry
tags:
- fano-varieties
- birational-geometry
- algebraic-cycles-enumerative
arxiv_id: 2611.05452v1
arxiv_url: https://arxiv.org/abs/2611.05452
arxiv_submitted: '2026-11-03'
arxiv_updated: '2026-11-03'
summary: Fano多様体のPicard数と擬指数の積が次元から高々1だけ小さい場合を分類する論文である。OpenAIによる独立な二点Gromov–Witten対応の結果を入力として、分裂しない有理曲線族を構成し、藤田の分類定理へつなげる。
abstract_en: ''
summary_en: The paper concerns the near-extremal range in the generalized Mukai inequality. It uses independent curve correspondences from earlier work to control unsplit rational-curve families. This converts a numerical condition on a smooth Fano variety into an explicit classification. The argument distinguishes the previously established equality case from the additional case with defect one.
abstract_ja: 滑らかな複素Fano多様体について、藤田の強化一般化向井予想を証明する。独立な二点Gromov–Witten対応から有限個の分裂しない有理曲線族を取り出し、その鎖が多様体を連結することを示す。これらを用いて逐次的な極小水平曲線族の反標準次数を評価し、各族の非分裂性を得ることで、藤田の収縮定理と帰納的分類を適用する。
abstract_source_url: https://arxiv.org/abs/2611.05452
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.05452v1](https://arxiv.org/abs/2611.05452)
- **著者:** Duo Li
- **初回投稿日:** 2026-11-03
- **最終更新日:** 2026-11-03
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Fano多様体を特徴づける基本的な数値には、独立な因子類の数であるPicard数と、有理曲線の最小反標準次数である擬指数がある。一般化向井予想はこの二つと次元の間の鋭い制約を予想し、最大値では射影空間の積が現れる。

本論文は、その最大値から差が1以内という範囲を分類する。結論は抽象的な有界性ではなく、射影空間、二次超曲面、特定の射影束とそれらの積からなる明示的なリストである。

著者はOpenAIの先行結果を入力として明示し、独立な二点Gromov–Witten対応を通常の有理曲線族へ移す。これにより藤田の既存の収縮・帰納的分類を適用するための非分裂性を保証する。したがって記事では、引用される一般化向井不等式と本論文の追加的な分類を区別する。

## 背景と問題設定

$X$は正次元$n$の滑らかで連結な複素射影Fano多様体、$\rho\_X$はPicard数とする。擬指数は

$$
\iota\_X=\min\lbrace -K\_X\cdot C:C\subset X\text{ は既約有理曲線}\rbrace
$$

である。線束の可除性で定めるFano指数とは異なる量である。IntroductionのTheorem 1.1はOpenAIの結果として

$$
\rho\_X(\iota\_X-1)\leq n,
\qquad
\rho\_X(\iota\_X-1)=n\Longleftrightarrow X\simeq(\mathbb P^{\iota\_X-1})^{\rho\_X}
$$

を引用する。藤田の強化版は$\rho\_X(\iota\_X-1)\geq n-1$という一段広い領域を扱う。

## 主結果

### 差が0または1の場合の分類（Theorem 1.2）

上の数値条件のもとで、$X$は以下の明示的な多様体のいずれかと同型になる。まず$\iota\_X\geq2$であり、

$$
\delta=n-\rho\_X(\iota\_X-1)\in\lbrace 0,1\rbrace
$$

となる。$\delta=0$なら$X\simeq(\mathbb P^{\iota\_X-1})^{\rho\_X}$である。$\delta=1$かつ$\rho\_X=1$なら$n=\iota\_X\geq3$で$X\simeq Q^n$となる。

$\delta=1$かつ$\rho\_X\geq2$の場合のリストは

$$
Q^{\iota\_X}\times(\mathbb P^{\iota\_X-1})^{\rho\_X-1}\quad(\iota\_X\geq3),
$$

$$
B\_{\iota\_X}\times(\mathbb P^{\iota\_X-1})^{\rho\_X-2},\qquad
I\_{\iota\_X}\times(\mathbb P^{\iota\_X-1})^{\rho\_X-2},
$$

$$
\mathbb P^{\iota\_X}\times(\mathbb P^{\iota\_X-1})^{\rho\_X-1}
$$

である。ここで$Q^m$は滑らかな$m$次元二次超曲面で、

$$
B\_m=\mathbb P\_{\mathbb P^m}(\mathcal O^{\oplus(m-1)}\oplus\mathcal O(1)),
\qquad I\_m=\mathbb P\_{\mathbb P^m}(T\_{\mathbb P^m})
$$

とする。射影化は一次元商をパラメータ化する規約であり、空の積は一点と読む。二次超曲面の条件は$Q^2\simeq\mathbb P^1\times\mathbb P^1$のPicard数が2であることを反映する。

## 証明の見取り図

先行研究から、独立な数値的曲線類$\gamma\_1,\ldots,\gamma\_{\rho\_X}$と非零の二点対応の積が得られ、

$$
\sum\_{j=1}^{\rho\_X}(-K\_X\cdot\gamma\_j-1)\leq n
$$

を満たす。藤田の数値条件により各反標準次数は$\iota\_X+1<2\iota\_X$以下となり、曲線の分裂を排除できる。対応の台から得た族の数値類が$N\_1(X)\_{\mathbb R}$を張ることにより、有理鎖商は一点となる。これらの族を逐次商構成の極小水平族と比較し、全段階の非分裂性を示して藤田の既知の定理を適用する。OpenAIの入力定理自体の証明は本記事では検証していない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.05452)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.05452v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.1（引用結果）, Theorem 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.05452v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
