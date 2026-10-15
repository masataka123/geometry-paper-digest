---
layout: paper
title: Kawamata boundedness for Fano threefolds and the Graded Ring Database
title_ja: KawamataのFano三次元有界性と次数付き環データベース
authors: Gavin Brown, Alexander Kasprzyk, Miles Reid
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We give an effective realisation of Kawamata's famous bound for Fano 3-folds. Our result is a list of 39,550 candidate Hilbert series $P$ for Fano 3-folds satisfying the Bogomolov stability inequality. For each $P$, there may or may not be a Fano 3-fold $X$ that realises $P$, but even so we give a set of weights that we expect to be among those of a minimal generating set of the anticanonical ring of any such $X$. This provides a crude first approximation to the ongoing classification of Fano 3-folds. We explain in detail what this data means, the important nuances that current known examples reveal about it, and how it relates to a range of different classification programmes.
topic: algebraic-geometry
tags:
- fano-varieties
- chern-classes
- singularities
- birational-geometry
arxiv_id: 2201.07178v2
arxiv_url: https://arxiv.org/abs/2201.07178
arxiv_submitted: '2022-01-18'
arxiv_updated: '2026-10-14'
summary: Bogomolov型不等式を満たすFano三次元多様体の反標準Hilbert級数を39,550個の候補に絞り、Kawamataの有界性を具体的なデータとして実現する。候補級数の存在と、それを実現する多様体の存在は異なり、この一覧は分類完成ではなく構成と排除のための基盤である。
abstract_en: We give an effective realisation of Kawamata's famous bound for Fano 3-folds. Our result is a list of 39,550 candidate Hilbert series $P$ for Fano 3-folds satisfying the Bogomolov stability inequality. For each $P$, there may or may not be a Fano 3-fold $X$ that realises $P$, but even so we give a set of weights that we expect to be among those of a minimal generating set of the anticanonical ring of any such $X$. This provides a crude first approximation to the ongoing classification of Fano 3-folds. We explain in detail what this data means, the important nuances that current known examples reveal about it, and how it relates to a range of different classification programmes.
summary_en: ''
abstract_ja: Fano三次元多様体の有界性を、反標準Hilbert級数の有限リストとして具体化する。Bogomolov型の安定性不等式を仮定した候補は39,550個であり、各候補には反標準環の生成元の重みに関する予測も付随する。これらが実際に多様体として実現されるかは別の問題である。既知の分類やトーリック多様体との対応を整理し、データベースの数学的意味と利用上の限界を説明する。
abstract_source_url: https://arxiv.org/abs/2201.07178
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2201.07178v2](https://arxiv.org/abs/2201.07178)
- **著者:** Gavin Brown, Alexander Kasprzyk, Miles Reid
- **初回投稿日:** 2022-01-18
- **最終更新日:** 2026-10-14
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Fano三次元多様体の有界性は、候補が有限に制御されることを保証する。しかし具体的な多様体を探すには、その有限性を実際に調べられる数値データへ変換する必要がある。本論文はGraded Ring DatabaseのFano三次元部分を、この観点から定式化する。

中心となるのは反標準Hilbert級数のリストである。Chern類の不等式を課すと候補級数は39,550個となり、より弱い条件では52,646個となる。著者らは候補ごとに反標準埋込みの重みや余次元を推定し、既知の構成と対応づける。

この数は多様体の変形族の個数ではない。実現されない級数があり得る一方、同じ級数を異なる多様体が共有する。候補表は分類を完成させる結果ではなく、新しい構成や非存在証明を導く数値的な地図である。

## 背景と問題設定

本論文では、複素数体上の正規射影三次元多様体でcanonical特異点をもち、$-K_X$が豊富なものをFano三次元多様体と呼ぶ。反標準Hilbert級数は

$$
P_X(t)=\sum_{m\ge0}h^0(X,\mathcal O_X(-mK_X))t^m
$$

であり、種数は$g_X=h^0(X,-K_X)-2$である。prime Fanoとは、さらに$\mathbb Q$-factorial terminal特異点をもち、Weil類群の階数が1の場合をいう。反標準類が類群の生成元であることや、類群に捩れがないことまでは要求しない。

## 主結果

### 主定理（Theorem 1.2）

Fano三次元多様体$X$が

$$
(-K_X)^3\le3(-K_X)\cdot c_2(X)
$$

を満たすなら、$P_X(t)$は39,550個の有理関数からなるリスト$\mathcal F_3$に属する。これは必要条件を満たす級数を列挙する定理であり、各級数の実現可能性を保証しない。

Bogomolov半安定な反射的余接層をもつprime Fanoでは、この不等式はBogomolov–Miyaoka–Yau型評価から得られる。さらにIntroductionで引用されるLiu–Liuの結果により、prime Fano全体で厳密不等式が成り立ち、すべてのprime Fanoについて$P_X\in\mathcal F_3$を得る（Corollary 1.4）。

### より広い候補集合（Corollary 1.5）

係数3を4に緩めると、$\mathcal F_3\subset\mathcal F_4$という52,646個の候補集合が得られる。孤立canonical特異点をもちPicard数1のFano三次元多様体は、引用された不等式

$$
(-K_X)^3<4(-K_X)\cdot c_2(X)
$$

によって$P_X\in\mathcal F_4$を満たす。たとえば重み付き射影空間$\mathbb P(1,1,3,5)$は$\mathcal F_4\setminus\mathcal F_3$の例であり、terminalではないためprime Fanoとは異なる。

### トーリック分類との比較（Proposition 1.7）

674,688個のトーリックFano三次元多様体は5,772種類のHilbert級数を実現する。そのすべてが$\mathcal F_4$に属し、5,760種類が$\mathcal F_3$に属する。多様体の数と級数の数が大きく異なることは、級数だけでは分類対象を区別できないことを具体的に示す。

## 証明の見取り図

Introductionは、Kawamataの数値的不等式をHilbert級数への有限な組合せ条件へ変換することを基本方針としている。Section 2で候補集合を構成し、Section 3で反標準埋込みの最小余次元を推定する。Section 4では既知の構成・分類と照合し、Section 5では候補が多様体を自動的に実現するわけではないという制限を整理する。

埋込みの重みは生成元についての予測を含む。したがって記事でも、候補の数値データ、既知の実現例、まだ存在が分からない多様体を区別する。データベースのコードやSQLを実行して独自に分類を再検証したものではない。

## 原論文との対応

- **Abstractページ:** [Kawamata boundedness for Fano threefolds and the Graded Ring Database](https://arxiv.org/abs/2201.07178)
- **Introduction:** [PDF](https://arxiv.org/pdf/2201.07178v2) — Section 1, pp. 1–4（p. 3の表は候補の分布）
- **Introduction中で言及された主要結果:** Theorem 1.2, Corollaries 1.4–1.5, Proposition 1.7
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2201.07178v2
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source_scope:** Abstract and Introduction
