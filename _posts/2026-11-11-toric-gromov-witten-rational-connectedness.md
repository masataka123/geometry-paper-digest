---
layout: paper
title: Gromov-Witten Nonvanishing and Symplectic Deformations of Toric Varieties
title_ja: トーリック多様体のGromov–Witten非消滅と有理連結性の変形不変性
authors: Nathan Tausik
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $A$ be nonzero in the cohomology ring of a smooth projective toric variety $X$. In this note, we observe the existence of a nonzero Gromov-Witten invariant of the form $\langle A, A, \ldots\rangle_{0, n,β}^X$ as a consequence of Iritani's work on the big quantum cohomology ring of $X$. This implies Kollár's conjecture on the symplectic deformation invariance of rational connectedness in the case where $X$ is toric. If $X$ is moreover Fano and $B$ is also nonzero in the cohomology ring, we prove the existence of a nonzero Gromov-Witten invariant of the form $\langle A,B,*\rangle_{0,3,β}^X$ using Batyrev's presentation of the small quantum cohomology ring of $X$. We conclude with a few consequences of this nonvanishing result.
topic: algebraic-geometry
tags:
- toric-geometry
- algebraic-cycles-enumerative
- symplectic-contact-geometry
- fano-varieties
arxiv_id: 2611.13422v1
arxiv_url: https://arxiv.org/abs/2611.13422
arxiv_submitted: '2026-11-10'
arxiv_updated: '2026-11-10'
summary: 滑らかな射影トーリック多様体で、任意の非零コホモロジー類Aを二度挿入する種数0 Gromov–Witten不変量の非消滅を示す。Fanoの場合には異なる二類A,Bを用いる3点不変量まで強め、トーリック多様体とシンプレクティック変形同値な滑らかな射影多様体の有理連結性を導く。
abstract_en: ''
summary_en: Toric quantum cohomology supplies nonzero genus-zero curve counts with two prescribed insertions. For a general smooth projective toric variety the insertions may be the same nonzero class, while in the Fano case any two nonzero classes can occur in a three-point invariant. Choosing point classes transfers rational connectedness to smooth projective symplectic deformation partners. The result addresses the toric case of a broader conjecture, rather than arbitrary rationally connected varieties.
abstract_ja: 射影トーリック多様体の量子コホモロジーから、二つの指定挿入を持つGromov–Witten不変量の非消滅を引き出す。一般のトーリックの場合は同一の非零類を二度挿入でき、Fanoの場合は任意の二つの非零類について3点不変量が非零となる。点の類を使うことで、トーリック多様体からのシンプレクティック変形に対し有理連結性が保存されることを示す。
abstract_source_url: https://arxiv.org/abs/2611.13422
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.13422v1](https://arxiv.org/abs/2611.13422)
- **著者:** Nathan Tausik
- **初回投稿日:** 2026-11-10
- **最終更新日:** 2026-11-10
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

有理連結性は、一般の二点を有理曲線で結べるという代数幾何的性質である。Kollárの予想は、この性質が滑らかな射影多様体のシンプレクティック変形で保たれるかを問う。一点を通る有理曲線によるunirulednessの場合と異なり、二点条件では曲線の分裂が障害になる。

本論文は、滑らかな射影トーリック多様体について、同じ非零コホモロジー類を二度挿入する種数0 Gromov–Witten不変量が非零となることを示す。Fanoの場合には、異なる任意の二つの非零類を指定した3点不変量へ強める。

点の類を二度挿入すれば、シンプレクティック変形先にも二点を結ぶ有理曲線の鎖が存在する。滑らかな射影多様体で有理鎖連結性と有理連結性が一致することを用い、Kollár予想のトーリックの場合を得る。

## 背景と問題設定

滑らかな射影多様体$X,Y$について、Kähler形式へ変形可能なシンプレクティック形式を選び、それらがシンプレクティック同型で対応するとき、本論文は両者をシンプレクティック変形同値と呼ぶ。Gromov–Witten不変量はこの同値で保たれる。

KollárとRuanによるunirulednessの不変性は、一点の挿入を持つ非零不変量を使う。一方、一般の二点を通る最小次数のvery free曲線は、very freeでない成分へ分裂し得るため、同じ証明をそのまま二点へ移せない。IntroductionはVoisinとTianによる三次元の場合の有理連結性の不変性、および追加条件の下での二点不変量の非消滅を先行結果として挙げる。

## 主結果

### 主定理：二挿入を持つ不変量の非消滅（Theorem 4）

$X$を$d$次元の滑らかな射影トーリック多様体、$0\ne A\in H^\ast (X,\mathbb C)$とする。このとき、適切な$n,\beta$と残りの挿入に対して

$$
\langle A,A,\ldots\rangle^X\_{0,n,\beta}\ne0
$$

となる。さらに$X$がFanoで$0\ne B\in H^\ast (X,\mathbb C)$なら、ある第三の挿入と曲線類により

$$
\langle A,B,\ast \rangle^X\_{0,3,\beta}\ne0
$$

となる。一般のトーリックの場合とFanoの場合で、挿入の自由度と標点数の結論が異なる。

任意の類に対して$\beta\ne0$まで無条件に保証する定理ではない。Introductionは$A\smile A=0$なら次数零の寄与が消えるため$\beta\ne0$を得ると説明する。Fanoの場合も$A\smile B=0$なら同様である。点の類を二度用いる応用では、この点が実際の曲線の存在を確保する。

### シンプレクティック変形先の有理連結性（Corollary 1）

$Y$が滑らかな射影多様体で、滑らかな射影トーリック多様体$X$とシンプレクティック変形同値なら、$Y$は有理連結である。また$Y$上でも任意の非零$A$について上記の二重挿入の非消滅を得る。$X$がFanoなら$Y$に対しても任意の非零$A,B$による3点非消滅が移る。ここで変形先$Y$自体のFano性を結論や前提に付け加えない。

これは始点がトーリックである場合のKollár予想を扱うものであり、すべての有理連結多様体について予想を解決したという意味ではない。

## 証明の見取り図

Abstractは、一般の場合にはIritaniによるbig quantum cohomologyの結果、Fanoの場合にはBatyrevによるsmall quantum cohomologyの表示を入力とすることを説明する。これらから非消滅を取り出す環論的な議論の詳細は後続節にあるため、ここではIntroductionが具体的に説明する幾何学的帰結に焦点を当てる。

$A=[\mathrm{pt}]$として得た二点不変量は、代数的・シンプレクティックGromov–Witten不変量の一致と変形不変性により$Y$へ移る。非消滅は種数0安定写像の二点評価写像が$Y\times Y$を支配することを意味し、一般の二点が有理曲線の鎖で結ばれる。最後に滑らかな射影多様体の有理鎖連結性から有理連結性への既知の結果を適用する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.13422)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.13422v1) — Section 1, pp. 1–2（Section 2より前）
- **Introduction中で言及された主要結果:** Theorem 4; Corollary 1; 背景としてTheorems 1–3とConjecture 1
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.13422v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
