---
layout: paper
title: Bounded Leaf Volumes and Analytic Quotients of Singular Holomorphic Foliations
title_ja: 有界葉体積を持つ特異正則葉層の大域解析的商
authors: Carlos Eduardo Martínez, Alberto Verjovsky
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
- math.DS
arxiv_abstract: Let $\mathcal{F}$ be a singular holomorphic foliation of dimension $k$ on a compact K\"ahler manifold $M$ of dimension $n$. Suppose that the volumes of its regular leaves are uniformly bounded, $\dim(Sing\mathcal{F})<k$, and the union of the leaf closures meeting $Sing\mathcal{F}$ has finite $2k$-dimensional Hausdorff measure. We prove that the quotient by chains of intersecting leaf closures is a normal compact complex analytic space of dimension $n-k$. The quotient map is proper and holomorphic, with connected fibers. The proof uses Bishop's theorems, Remmert and Stein extension, Barlet's cycle space, and Stein factorization. Away from the images of separatrices, the quotient has local charts given by finite holonomy groups. Examples show that these images need not coincide with the singular set of the quotient, and that bounded leaf volumes alone do not imply Hausdorffness. In codimension one, Malgrange's theorem makes the separatrix measure assumption automatic when $codim(Sing\mathcal{F})\geq
  3$.
topic: several-complex-variables
tags:
- foliations
- complex-analytic-spaces
arxiv_id: 2610.22920v1
arxiv_url: https://arxiv.org/abs/2610.22920
arxiv_submitted: '2026-10-16'
arxiv_updated: '2026-10-16'
summary: コンパクトKähler多様体の特異正則葉層について、葉全体の体積の一様有界性と特異集合・separatrix集合の条件から、正規コンパクト複素解析空間への商を構成する。葉の閉包の交わりの鎖で同値関係を定めることで、特異点を含む大域的な葉空間を扱う。
abstract_en: Let $\mathcal{F}$ be a singular holomorphic foliation of dimension $k$ on a compact K\"ahler manifold $M$ of dimension $n$. Suppose that the volumes of its regular leaves are uniformly bounded, $\dim(Sing\mathcal{F})<k$, and the union of the leaf closures meeting $Sing\mathcal{F}$ has finite $2k$-dimensional Hausdorff measure. We prove that the quotient by chains of intersecting leaf closures is a normal compact complex analytic space of dimension $n-k$. The quotient map is proper and holomorphic, with connected fibers. The proof uses Bishop's theorems, Remmert and Stein extension, Barlet's cycle space, and Stein factorization. Away from the images of separatrices, the quotient has local charts given by finite holonomy groups. Examples show that these images need not coincide with the singular set of the quotient, and that bounded leaf volumes alone do not imply Hausdorffness. In codimension one, Malgrange's theorem makes the separatrix measure assumption automatic when $codim(Sing\mathcal{F})\geq
  3$.
summary_en: ''
abstract_ja: 著者らは、正則葉の体積が一様有界で、特異集合の次元が葉の次元より小さく、特異集合に触れる葉閉包の合併が有限Hausdorff測度を持つ場合を考える。このとき閉包の交わりの鎖による商はHausdorffであり、正規コンパクト複素解析空間の構造を持つ。商写像は固有正則で連結ファイバーを持つが、葉体積の有界性だけではこの結論は保証されない。
abstract_source_url: https://arxiv.org/abs/2610.22920
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.22920v1](https://arxiv.org/abs/2610.22920)
- **著者:** Carlos Eduardo Martínez, Alberto Verjovsky
- **初回投稿日:** 2026-10-16
- **最終更新日:** 2026-10-16
- **主分類・副分類:** math.CV（主分類）; math.DS
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

葉層の各葉を一点へ潰して商を作っても、その商がHausdorffになるとは限らない。特異点の近くでは異なる葉の閉包が交わるため、単に正則葉を同一視するだけでは十分でない。本論文は葉閉包の交わりを鎖状につないだ同値関係を用いる。

コンパクトKähler多様体上で各葉全体の体積を一様に抑え、特異集合の次元を葉より小さくし、特異集合に触れる全ての葉閉包の合併に有限測度を仮定する。この下で同値関係は閉じており、コンパクトHausdorff商が得られる。

商はさらに正規複素解析空間となり、固有正則な商写像は連結ファイバーを持つ。特異葉の像と商空間の特異集合は必ずしも一致せず、体積有界性だけから解析的な良い商を期待してはならないという限界も明示される。

## 背景と問題設定

$M$を複素次元$n$の連結コンパクトKähler多様体とし、$0<k<n$次元の特異正則葉層$\mathcal F$を考える。その接層$T\_{\mathcal F}\subset T\_M$は整合的・飽和で、Lie bracketで閉じる。$S=\operatorname{Sing}\mathcal F$とおく。

正則葉$L$の体積は$\operatorname{Vol}\_{2k}(L)=\frac1{k!}\int\_L\omega^k$で測る。$x,y\in M$について、葉閉包$\overline L\_1,\ldots,\overline L\_m$が隣同士で交わり、最初に$x$、最後に$y$を含むとき同値とする。この同値関係による商を$Q$とし、

$$
\Sigma=\bigcup\_{\overline L\cap S\ne\varnothing}\overline L
$$

をfull separatrix setと呼ぶ。

## 主結果

### Hausdorff商の存在（Theorem 1.2）

次の三条件の下で、上記の商$Q$はコンパクトHausdorffとなる。

$$
\operatorname{Vol}\_{2k}(L)\leq C\quad\text{for every regular leaf }L,\qquad
\dim\_{\mathbb C}S<k,\qquad \mathcal H^{2k}(\Sigma)<\infty.
$$

$\Sigma$は空でなければ純$k$次元のコンパクト解析的部分集合で、$S$を含む。その連結成分がちょうど$S$に触れる同値類であり、それ以外の同値類はコンパクトな正則葉である。同値関係が$M\times M$で閉じることがHausdorff性を保証する。

第一の条件は各葉全体の体積の上限、第三の条件は合併集合全体の有限測度であり、別の条件である。$S$が空なら追加の二条件は不要となり、正則葉層の既知の有界体積基準に対応する。

### 解析的商と余次元1の場合

Abstractと冒頭節は、$Q$が複素次元$n-k$の正規コンパクト複素解析空間となり、$q:M\to Q$が固有正則・連結ファイバーを持つことを述べる。冒頭節ではこの解析構造の定理をTheorem 5.1として案内する。separatrixの像から離れた場所では、有限holonomy群による局所商の記述が得られる。

また葉層の余次元が1で$\operatorname{codim}\_{\mathbb C}S\geq3$なら、Malgrangeの定理による局所第一積分と一様体積評価から、separatrixの測度条件が従い、コンパクトRiemann面への大域商を得る。これはCorollary 10.3として案内される帰結であり、後続節の証明をここで新たに確認したものではない。

## 証明の見取り図

Abstractが挙げる主要な道具はBishopの拡張・コンパクト性定理、Remmert–Stein拡張、Barletのサイクル空間、Stein分解である。葉体積の制御によって葉閉包を解析的サイクルとして扱い、極限の連結性を商の同値関係に結び付ける。

冒頭節では、葉閉包の極限が可約になり得ることが注意される。$\dim S<k$という条件により各成分が再び葉閉包となり、それらを交わりの鎖でつなげられる。この点が、特異点を孤立点に限らず大域商を構成する際の要となる。

## 原論文との対応

- **Abstractページ:** [Bounded Leaf Volumes and Analytic Quotients of Singular Holomorphic Foliations](https://arxiv.org/abs/2610.22920)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.22920v1) — 冒頭Section 1（The global quotient on a compact Kähler manifold）, pp. 1–2
- **Introduction中で言及された主要結果:** Theorem 1.2; AbstractとSection 1で案内されるTheorem 5.1・Corollary 10.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.22920v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
