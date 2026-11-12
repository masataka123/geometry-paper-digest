---
layout: paper
title: On the stable birational type of Fano threefolds
title_ja: Fano三次元多様体の安定双有理型と中間Jacobi多様体
authors: Claire Voisin
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We show that, given a very general cubic threefold $X$, any smooth cubic threefold stably birational to $X$ must be isomorphic to $X$. The method applies as well to other Fano 3-folds, like the sextic double solid, and the quartic threefold. We also discuss the higher-dimensional case.
topic: algebraic-geometry
tags:
- fano-varieties
- birational-geometry
- hodge-theory
- algebraic-cycles-enumerative
arxiv_id: 2611.14417v1
arxiv_url: https://arxiv.org/abs/2611.14417
arxiv_submitted: '2026-11-10'
arxiv_updated: '2026-11-10'
summary: 非常に一般の三次元三次超曲面と安定双有理な滑らかな三次超曲面は、実際に同型であることを示す。中間Jacobi多様体の間の非零準同型を安定双有理関係から取り出す方法により、四次三次元超曲面や六次double solidにも同様の剛性を得る。
abstract_en: We show that, given a very general cubic threefold $X$, any smooth cubic threefold stably birational to $X$ must be isomorphic to $X$. The method applies as well to other Fano 3-folds, like the sextic double solid, and the quartic threefold. We also discuss the higher-dimensional case.
summary_en: ''
abstract_ja: 非常に一般の三次元三次超曲面を固定すると、それと安定双有理な任意の滑らかな三次元三次超曲面は同型となる。この方法は六次double solidおよび三次元四次超曲面にも適用される。論文はさらに高次元の場合についても議論する。
abstract_source_url: https://arxiv.org/abs/2611.14417
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.14417v1](https://arxiv.org/abs/2611.14417)
- **著者:** Claire Voisin
- **初回投稿日:** 2026-11-10
- **最終更新日:** 2026-11-10
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

射影空間との積を取ってから双有理になるという安定双有理関係は、同型関係よりはるかに弱い。それでも、非常に一般のFano三次元多様体については、その安定双有理型が同じ族の中の同型型を決める場合があることを示す論文である。

中心となるのは三次元三次超曲面である。非常に一般の一つを固定すれば、それと安定双有理な滑らかな三次元三次超曲面は全て同型となる。同様の結論は三次元四次超曲面と六次double solidにも成立する。

証明は、中間Jacobi多様体への非零準同型を、対角類のコホモロジー的分解の障害から導く。この構成は同じ族内の剛性だけでなく、安定双有理な有理連結多様体の第三Betti数に対する下界も与える。

## 背景と問題設定

多様体 $X,X'$ が安定双有理とは、適切な射影空間との積 $X\times\mathbb P^r$ と $X'\times\mathbb P^{r'}$ が双有理になることである。族の中の非常に一般な二つのファイバーが安定双有理でないという既存結果から、片方を固定した上で全ての滑らかな相手を制御することは直ちには従わない。

本論文の鍵は、三次コホモロジーから作る中間Jacobi多様体 $J^3(X)$ である。対角類のコホモロジー的分解の非存在を利用することで、安定双有理な相手にもこのアーベル多様体の情報を残す。

## 主結果

### 同じ族での安定双有理剛性（Theorem 1.3）

非常に一般の滑らかな三次元三次超曲面 $X$ と任意の滑らかな三次元三次超曲面 $X'$ について、

$$
X\ \text{と}\ X'\ \text{が安定双有理}\quad\Longrightarrow\quad X\cong X'
$$

が成り立つ。三次元四次超曲面同士、および六次double solid同士についても同様である。

「非常に一般」は $X$ に課される仮定であり、相手 $X'$ は非常に一般である必要がない。なお、以下のBetti数の定理に含まれる四次double solidを、この同型定理の対象へ追加することはできない。

### 安定双有理な相手の第三Betti数（Theorem 1.5）

$X$ が非常に一般の三次元三次超曲面、三次元四次超曲面、四次または六次double solidのいずれかで、$X'$ が滑らかな射影的有理連結多様体であるとする。$X'$ が $X$ と安定双有理なら

$$
b\_3(X')\ge b\_3(X)
$$

が成り立つ。相手の次元は三に限定されない。例えば三次元三次超曲面では $b\_3=10$、四次double solidでは $b\_3=20$ であり、この下界が第三コホモロジーの小さい相手を除外する。

### 中間Jacobi多様体への非零写像（Proposition 1.6）

$X,X'$ を安定双有理な滑らかな射影的有理連結多様体とする。$\dim X=3$、$H^3(X,\mathbb Z)$ に捩れがなく、$X$ が対角類のコホモロジー的分解をもたないなら、非零準同型

$$
\gamma:J^3(X)\longrightarrow J^3(X')
$$

が存在する。さらに第三Betti数が等しく $J^3(X)$ が単純なら、これはisogenyとなる。この命題が幾何学的な関係をHodge理論的な比較へ変換する。

## 証明の見取り図

安定双有理関係を対応として扱い、対角類のコホモロジー的分解の障害と組み合わせて、中間Jacobi多様体上で消えない写像を作る。単純性と次元の比較によりisogenyを得た後、Introductionで引用される一般的なisogeny Torelli型の結果を適用して、対象となる族では元の多様体の同型へ戻す。

第三Betti数の下界は、同じ非零写像をより広い相手に適用することで得られる。高次元への展開についてもIntroductionは論じるが、追加のHodge理論的条件や対角分解の非存在が必要であり、無条件の一般次元の剛性定理として読むべきではない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.14417)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.14417v1) — Introduction, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.3, 1.5; Proposition 1.6
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.14417v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
