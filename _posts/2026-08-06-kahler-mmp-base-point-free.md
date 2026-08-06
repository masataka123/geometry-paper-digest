---
layout: paper
title: "On the Kähler MMP and the transcendental base-point-free theorem"
title_ja: "Kähler最小モデル・プログラムと超越的base-point-free定理"
authors: "Christopher Hacon, Lingyao Xie"
arxiv_primary_category: "math.AG"
arxiv_categories:
  - math.AG
topic: algebraic-geometry
arxiv_id: "2607.24986v1"
arxiv_url: "https://arxiv.org/abs/2607.24986v1"
arxiv_submitted: "2026-07-27"
arxiv_updated: "2026-07-27"
summary: >-
  modified bigな境界をもつコンパクトKähler generalized klt対に対して、Mori fiber spaceまたはgood log terminal modelへ至る最小モデル・プログラムを確立する。中心となる超越的base-point-free定理は、nefな随伴Bott--Chern類がKähler類の引き戻しとして半豊富になることを示す。
abstract_en: >-
  In this article, we establish the minimal model program for big gklt Kähler pairs, and in particular we prove Tosatti's transcendental base-point-free conjecture.
summary_en: ""
abstract_ja: >-
  bigなgeneralized klt Kähler対に対する最小モデル・プログラムを確立する。特に、Tosattiによる超越的base-point-free予想を証明する。
abstract_source_url: "https://arxiv.org/abs/2607.24986v1"
license_name: "Creative Commons Attribution 4.0 International (CC BY 4.0)"
license_url: "https://creativecommons.org/licenses/by/4.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2607.24986v1](https://arxiv.org/abs/2607.24986v1)
- **著者:** Christopher Hacon, Lingyao Xie
- **初回投稿日:** 2026年7月27日
- **最終更新日:** 2026年7月27日（v1）
- **主分類・副分類:** Algebraic Geometry (math.AG)
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)

## 要約

射影代数多様体に対する BCHM の最小モデル・プログラム（MMP）を、nef な b-divisor に由来する超越的 $(1,1)$-類も境界データに含むコンパクト Kähler generalized klt（gklt）対へ拡張する論文である。

非擬有効な場合には Mori fiber space を、擬有効かつ境界が big（または随伴類が big）な場合には good log terminal model を得る。既知の flip の存在と cone theorem に加え、本論文の新しい入力は超越的 base-point-free 定理と scaling 付き MMP の停止である。

中心となる base-point-free 定理は、nef な Bott--Chern 類 $\alpha=K_X+B+\beta_X$ を、Moishezon contraction による Kähler 類の引き戻しとして実現する。これは Tosatti の超越的 base-point-free 予想を解決する。

ただし modified big 仮定を外した gklt 対の log terminal model、一般の flip の停止、Kähler klt 対の abundance は Introduction で予想として残されており、本論文の証明済み範囲には含まれない。

## 背景と問題設定

射影的 klt 対では BCHM が MMP の基本的帰結を確立した。Kähler 設定では divisor だけでなく Bott--Chern コホモロジーの超越的類を扱う必要があり、収縮後にも Kähler 性が保たれるか、nef 類が実際の収縮写像を定めるか、scaling 付き flip が停止するかが障害になる。

論文でいう semiample な類とは、コンパクト解析空間への正則写像 $f:X\to Y$ と $Y$ 上の Kähler 類 $\gamma$ が存在して、もとの類が $f^*\gamma$ と数値同値になることをいう。

## 主結果

### Kähler MMP（Theorem 1.1）

コンパクト Kähler gklt 対 $(X,B+\beta)$ に対し、次を結論する。

1. $K_X+B+\beta_X$ が擬有効でなければ、$(X,B+\beta)$ の Mori fiber space が存在する。
2. $K_X+B+\beta_X$ が擬有効で $B+\beta_X$ が big であるか、または $K_X+B+\beta_X$ 自身が big なら、good log terminal model が存在する。

これは projective かつ $\beta_X=0$ の BCHM の結論を、超越的 nef part を許す Kähler gklt 対へ移すものである。

### 超越的 base-point-free 定理（Theorem 1.4）

$n$ 次元コンパクト Kähler gklt 対 $(X,B+\beta)$ で

$$
\alpha=K_X+B+\beta_X
$$

が nef、かつ $B+\beta_X$ が modified big であるとする。このとき $\alpha$ は semiample であり、Moishezon contraction $f:X\to Y$ と $Y$ 上の Kähler 類 $\gamma$ が存在して

$$
\alpha\equiv f^*\gamma
$$

となる。さらに $X$ が strongly $\mathbb Q$-factorial なら $f$ は projective である。結論を単なる「半豊富性」とせず、収縮と引き戻しの式まで与える点が定理の具体的内容である。

### scaling 付き MMP（Theorem 1.5）

$B+\beta_X$ が big である strongly $\mathbb Q$-factorial な $n$ 次元コンパクト Kähler gklt 対をとり、$K_X+B+\beta_X+\omega$ が nef となる modified Kähler form $\omega$ を選ぶ。このとき $K_X+B+\beta_X$-MMP を $\omega$ の scaling 付きで実行でき、good log terminal model または Mori fiber space に到達して停止する。

### Kähler 性の保持（Theorem 1.7 and Corollary 1.8）

Fujiki class $\mathcal C$ の多様体上で nef and big な類 $\alpha=[K_X+B+\beta_X]$ が全ての有理曲線 $C$ に対して $\alpha\cdot C>0$ を満たせば、$\alpha$ は Kähler である。これにより、上の big 境界をもつ strongly $\mathbb Q$-factorial 対では flipping contraction または divisorial contraction の標的も Kähler になる。

## 証明の見取り図

証明は次元について、収縮定理、base-point-free 定理、scaling 付き MMP を相互に用いる連動帰納法で組み立てられる。

随伴類が big でない場合、Ou の判定から $X$ の uniruled 性を得て最大有理連結ファイブレーションを考える。相対 MMP で Mori fiber space を作り、標準束公式によって低次元の gklt 対へ移して帰納法を適用する。

big の場合は nef and big 類の non-Kähler locus と null locus の一致を使う。弱解析的特異点をもつ Kähler current と multiplier ideal の jumping number から非 Kähler locus 上の収縮を段階的に構成し、低次元の非 gklt 版収縮定理で貼り合わせた後、Artin と Fujiki の着想により全体へ延長する。scaling の停止には、境界がコンパクト集合内を動くときの weak log canonical model の有界性を用いる。

## 原論文との対応

- **Abstractページ:** [arXiv:2607.24986v1](https://arxiv.org/abs/2607.24986v1)
- **Introduction:** Section 1, pp. 2–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1–1.7, Corollary 1.8, Theorems 1.9–1.13, Conjectures 1.14–1.16
- **論文構成の説明:** Sections 1.1–1.3, pp. 2–5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC BY 4.0（arXiv Abstractページの表示）
- **source_scope:** Abstract and Introduction
