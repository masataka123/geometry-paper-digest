---
layout: paper
title: Finite Time Singularities of the Kähler Ricci Flow on Compact Kähler Surfaces are of Type I
title_ja: 体積崩壊するKähler曲面のRicci流のType I評価
authors: Yeyun Xu, Linfeng Zhou
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
arxiv_abstract: |-
  We establish a Type I curvature bound for finite-time volume-collapsing Kähler--Ricci flows on compact Kähler surfaces. No symmetry assumption is imposed, and the initial Kähler class need not be rational. The proof combines local symplectic topology with the classification of gradient Kähler--Ricci shrinking solitons. Bamler's compactness and structure theory provides the shrinking limits used in the argument.
topic: differential-geometry
tags:
- kahler-ricci-flow-solitons
- curvature
- symplectic-contact-geometry
arxiv_id: 2610.01643v1
arxiv_url: https://arxiv.org/abs/2610.01643
arxiv_submitted: '2026-10-01'
arxiv_updated: '2026-10-01'
summary: |-
  コンパクトKähler曲面上で有限時間に体積が零へ収束するKähler–Ricci流に、Type Iの大域曲率評価を与える。対称性や初期Kähler類の有理性を仮定せず、局所的なシンプレクティック障害と縮小ソリトンの分類を使う。既知の非崩壊の場合と合わせ、曲面の有限時間特異点をType Iとして扱える。
abstract_en: ''
summary_en: |-
  The paper addresses the collapsing case in the classification of finite-time singularities on compact Kähler surfaces. It bounds curvature globally at the Type I rate, including near singular fibers. The argument rules out quotient configurations using local symplectic topology and then examines shrinking limits. The conclusion is specific to complex dimension two and is combined with earlier noncollapsing results.
abstract_ja: |-
  有限時間に体積崩壊するコンパクトKähler曲面のKähler–Ricci流について、曲率が残り時間の逆数で抑えられることを証明する。初期類の有理性も対称性も必要としない。Bamlerのコンパクト性・構造理論で得る縮小極限を、局所シンプレクティック位相と勾配縮小Kähler–Ricciソリトンの分類によって制御する。
abstract_source_url: https://arxiv.org/abs/2610.01643
license_name: CC BY-NC-ND 4.0
license_url: http://creativecommons.org/licenses/by-nc-nd/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.01643v1](https://arxiv.org/abs/2610.01643)
- **著者:** Yeyun Xu, Linfeng Zhou
- **初回投稿日:** 2026-10-01
- **最終更新日:** 2026-10-01
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [CC BY-NC-ND 4.0](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

Kähler–Ricci流が有限時間で特異点を生じるとき、曲率の発散速度を残り時間の逆数で抑えられるかは基本的な問題である。そのような評価を持つ特異点をType Iと呼ぶ。コンパクト複素曲面ではいくつかの幾何的状況が既に理解されていたが、体積崩壊と特異ファイバーが同時に現れる場合が難所であった。

著者らは、有限時間に体積が零へ収束するコンパクトKähler曲面の流について、大域的なType I評価を与える。対称性の仮定はなく、初期Kähler類も有理類である必要はない。非崩壊の場合の既知の結果と合わせると、曲面上の有限時間特異点はすべてType Iとなる。

同じ結論を得る近年の仕事との違いは、単一のファイバー近傍におけるシンプレクティックな障害を使う点にある。高次元への一般化を述べるものではなく、Introductionは複素3次元で体積崩壊するType IIの先行例も挙げている。

## 背景と問題設定

非正規化Kähler–Ricci流

<div>
$$
\partial_t\omega(t)=-\operatorname{Ric}(\omega(t)),\qquad
\omega(0)=\omega_0,\qquad 0\le t\lt T\lt \infty
$$
</div>

を考える。非崩壊の場合にはConlon–Hallgren–Maの大域Type I評価が知られている。体積崩壊の場合は、消滅する場合を除いて曲線上のFanoファイブレーションへ帰着され、特異ファイバー付近の制御が必要となる。

## 主結果

### 主定理：体積崩壊の場合の曲率評価（Theorem 1.1）

連結なコンパクトKähler曲面 $(X,J,\omega_0)$ 上の最大解について

<div>
$$
\lim_{t\nearrow T}\operatorname{Vol}(X,\omega(t))
=\lim_{t\nearrow T}\frac12\int_X\omega(t)^2=0
$$
</div>

を仮定すると、初期の流だけに依存する $C<\infty$ が存在して

<div>
$$
\sup_X|\operatorname{Rm}(g(t))|_{g(t)}\le\frac{C}{T-t}
\qquad(0\le t\lt T)
$$
</div>

が成り立つ。$g(t)$ は $\omega(t)$ に対応するRiemann計量である。特異ファイバーから離れた領域だけでなく、$X$ 全体にわたる評価である。

### 適用範囲と先行結果との関係

非崩壊の場合の先行定理を併用して、コンパクトKähler曲面の有限時間特異点全体をType Iとして扱える。本論文のTheorem 1.1自体の仮定は体積崩壊である。また、IntroductionはXu–ZhangおよびCifarelli–Conlon–Hallgren–Zhangによる同じType I結論を明示し、証明法の違いを説明している。

## 証明の見取り図

ファイバー近傍の交叉形式の負の指数が高々1であることを利用する。非自明な球面商の仮想的な充填を最小解消で置き換え、残された有理的なrulingと例外配置を比較すると、Chern数の関係が両立しなくなる。この障害により、元の流に平坦な商の環状領域が生じることを排除し、より小さいスケールの縮小極限のorbifold点を排除する。

次に $r_i^2\ll T-t_i$ のスケールでは、コホモロジー類の発展から極限Kähler形式が完全形式になる。Bamlerの理論で取り出した滑らかな縮小極限を既知の分類に照らすとGaussianモデルしか残らず、取り出した極限の厳密に負のエントロピーと矛盾する。Introductionに説明されたこの経路に沿って主結果を紹介し、後続節の位相的議論や極限構成は検証していない。

## 原論文との対応

- **Abstractページ:** [公式Abstract](https://arxiv.org/abs/2610.01643)。`arxiv_abstract`は公式arXiv APIの原文全文を保存した。
- **Introduction:** [確認版PDF](https://arxiv.org/pdf/2610.01643v1)、Section 1, pp. 1–2。
- **Introduction中で言及された主要結果:** Theorem 1.1、Remark 1.2。
- **論文構成の説明:** Section 1, p. 2。
- **確認したarXivバージョン:** 2610.01643v1
- **確認したライセンス:** CC BY-NC-ND 4.0
- **source_scope:** Abstract and Introduction。後続節の証明の検証は行っていない。
