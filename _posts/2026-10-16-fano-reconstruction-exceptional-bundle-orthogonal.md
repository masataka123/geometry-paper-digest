---
layout: paper
title: Reconstruction of Fano manifolds from the orthogonal to an exceptional vector bundle
title_ja: 例外ベクトル束の直交圏からのFano多様体の再構成
authors: Songtao Kenneth Ma
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $X$ and $Y$ be smooth complex Fano manifolds of dimension at least three with very ample anticanonical bundles and let $V_X$ and $V_Y$ be exceptional vector bundles on $X$ and $Y$, respectively. We prove that a Fourier--Mukai equivalence $V_X^\perp\simeq V_Y^\perp$ implies $X\simeq Y$.
topic: algebraic-geometry
tags:
- fano-varieties
- vector-bundles-sheaves
arxiv_id: 2610.21904v1
arxiv_url: https://arxiv.org/abs/2610.21904
arxiv_submitted: '2026-10-15'
arxiv_updated: '2026-10-15'
summary: 非常に豊富な反標準束を持つ3次元以上の滑らかな複素Fano多様体は、例外ベクトル束の右直交圏から再構成できると主張する。構造層の直交圏を用いる場合には次元制限を取り除き、導来圏全体より小さい圏から多様体を決定する。
abstract_en: Let $X$ and $Y$ be smooth complex Fano manifolds of dimension at least three with very ample anticanonical bundles and let $V_X$ and $V_Y$ be exceptional vector bundles on $X$ and $Y$, respectively. We prove that a Fourier--Mukai equivalence $V_X^\perp\simeq V_Y^\perp$ implies $X\simeq Y$.
summary_en: ''
abstract_ja: 滑らかな複素Fano多様体から例外ベクトル束を取り除いた右直交圏が、元の多様体を決定するかを調べる。反標準束が非常に豊富で次元が3以上なら、二つの右直交圏のFourier–Mukai型同値から多様体の同型が従う。例外束が構造層の場合は、同じ非常に豊富という仮定の下で次元制限を除ける。
abstract_source_url: https://arxiv.org/abs/2610.21904
license_name: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
license_url: http://creativecommons.org/licenses/by-nc-sa/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.21904v1](https://arxiv.org/abs/2610.21904)
- **著者:** Songtao Kenneth Ma
- **初回投稿日:** 2026-10-15
- **最終更新日:** 2026-10-15
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

## 要約

Fano多様体の有界導来圏が元の多様体を決定することは、Bondal–Orlovの再構成定理で知られている。本論文は、その導来圏全体を保持する必要があるかを問う。例外ベクトル束を一つ取り除き、残った右直交圏だけで多様体を復元できるかが主題である。

主定理は、非常に豊富な反標準束を持つ3次元以上の滑らかな複素Fano多様体について、例外束の右直交圏がFourier–Mukai型に同値なら多様体が同型になる、というものである。特定の超曲面表示やFano多様体の分類に依存しない形で述べられる。

例外束を構造層に限定すると、次元制限を外す系が得られる。一方、Introductionに掲げられた一般のFano多様体についての予想には、反標準束の非常に豊富という仮定がない。本論文の定理が、その予想を無条件にすべて解決するという意味ではない。

## 背景と問題設定

ベクトル束$V\_X$が例外的であるとは、$\operatorname{RHom}\_X(V\_X,V\_X)\simeq\mathbb C$となることをいう。その右直交圏は

$$
V\_X^\perp=\lbrace F\in D^b(X)\mid\operatorname{RHom}\_X(V\_X,F)=0\rbrace ,
\qquad
D^b(X)=\langle V\_X^\perp,V\_X\rangle
$$

という半直交分解に現れる。残った圏の同値だけから、例外対象との貼り合わせを含む導来圏全体の同値が形式的に従うわけではない。

構造層の場合のConjecture 1.1は、滑らかな複素Fano多様体について、標準dg enhancementのMorita同値という意味での$\mathbb C$線形enhanced同値$\mathcal O\_X^\perp\simeq\mathcal O\_Y^\perp$が$X\simeq Y$を導くと予想する。先行研究はFano超曲面やdel Pezzo曲面などの特定の族を扱ってきた。

## 主結果

### 主定理（Theorem 1.2）

例外束の右直交圏のFourier–Mukai型同値から、多様体の同型が従う。

$$
V\_X^\perp\simeq V\_Y^\perp\quad\Longrightarrow\quad X\simeq Y.
$$

ここで$X,Y$はともに3次元以上の滑らかな複素Fano多様体、反標準束は非常に豊富であり、$V\_X,V\_Y$はそれぞれの例外ベクトル束である。同値の型と反標準束の仮定を保つことが重要で、任意の抽象的な圏同値や単なる豊富性についての主張へ置き換えない。

結論は、一つの例外対象を除いた部分圏にも、元のFano多様体を区別する情報が残っていることを意味する。Introductionは、高次元の議論が超曲面としての表示や分類を必要としない点を強調している。

### 構造層の場合（Corollary 1.3）

$V\_X=\mathcal O\_X$、$V\_Y=\mathcal O\_Y$の場合、非常に豊富な反標準束を持つ滑らかな複素Fano多様体について、次元制限なしに

$$
\mathcal O\_X^\perp\simeq\mathcal O\_Y^\perp\quad\Longrightarrow\quad X\simeq Y
$$

が成立する。同値はここでもFourier–Mukai型である。Introductionには詳細な証明戦略の説明がないため、本記事では後続節の技術的議論を再構成しない。

## 原論文との対応

- **Abstractページ:** [Reconstruction of Fano manifolds from the orthogonal to an exceptional vector bundle](https://arxiv.org/abs/2610.21904)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.21904v1) — Section 1, pp. 1–2（Section 2の前まで）
- **Introduction中で言及された主要結果:** Conjecture 1.1; Theorem 1.2; Corollary 1.3
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.21904v1
- **確認したライセンス:** [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
- **source_scope:** Abstract and Introduction
