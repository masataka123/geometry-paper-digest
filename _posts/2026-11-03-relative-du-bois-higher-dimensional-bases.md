---
layout: paper
title: Relative Du Bois complexes over higher dimensional bases
title_ja: 高次元の滑らかな底上の右相対Du Bois複体
authors: Dora Kassabova, Haoming Ning
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We extend the notion of the right relative Du Bois complex to a smooth base of arbitrary dimension. We further show that this complex satisfies base change in the sense of Kov\'acs--Taji, for flat families with strict higher Du Bois fibers, extending the result by Ning over a smooth curve.
topic: algebraic-geometry
tags:
- singularities
- hodge-theory
- moduli
arxiv_id: 2610.41719v1
arxiv_url: https://arxiv.org/abs/2610.41719
arxiv_submitted: '2026-10-30'
arxiv_updated: '2026-10-30'
summary: 特異多様体の族に対する右相対Du Bois複体を、任意次元の滑らかな底上で構成する。平坦族のファイバーがstrict higher Du Boisという条件を満たすと、対応する次数範囲で導来基底変換が成り立つ。
abstract_en: We extend the notion of the right relative Du Bois complex to a smooth base of arbitrary dimension. We further show that this complex satisfies base change in the sense of Kov\'acs--Taji, for flat families with strict higher Du Bois fibers, extending the result by Ning over a smooth curve.
summary_en: ''
abstract_ja: 右相対Du Bois複体を、曲線上の既存構成から任意次元の滑らかな底へ拡張する。特異な全空間に対しても構成でき、滑らかな射では通常の相対微分形式と一致する。さらに、平坦族の指定ファイバーがstrict-m-Du Bois特異点を持つなら、0からmまでの次数で導来制限がそのファイバーのDu Bois複体と準同型になる。
abstract_source_url: https://arxiv.org/abs/2610.41719
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.41719v1](https://arxiv.org/abs/2610.41719)
- **著者:** Dora Kassabova, Haoming Ning
- **初回投稿日:** 2026-10-30
- **最終更新日:** 2026-10-30
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

滑らかな族の相対微分形式は、ファイバーへ制限するとそのファイバーの微分形式になる。特異多様体で微分形式の役割を担うDu Bois複体についても、同様の相対構成と基底変換を求めることが自然である。

従来の左相対Du Bois複体では、一般に基底変換が成立しない。曲線を底とする場合には、右相対複体という別の構成がこの問題を改善することが知られていた。本論文は右相対複体を任意次元の滑らかな底へ拡張する。

平坦な族のファイバーにstrict higher Du Bois条件を置けば、指定次数まで基底変換が成り立つ。すべての特異点や非平坦な族で無条件に成立するという結論ではない。

## 背景と問題設定

滑らかな射 $f:X\to S$ では

$$
0\longrightarrow f^\ast \Omega\_S^1\longrightarrow\Omega\_X^1
\longrightarrow\Omega\_{X/S}^1\longrightarrow0
$$

から相対微分形式とフィルトレーションが得られる。Du Bois複体を $\underline\Omega\_X^\bullet$、その次数成分を $\underline\Omega\_X^p$ と書くと、特異な場合にもこの構造を導来圏で代替することが課題となる。

本論文は右・左をそれぞれ $+$・$-$ で区別する。strict-m-Du Boisという条件は、IntroductionがDefinition 2.2を参照して指定する特異点条件であり、単にDu Bois特異点という条件へ弱めて読まない。

## 主結果

### 任意次元の滑らかな底上での構成（Theorem 1.1）

複素代数多様体の射 $f:X\to S$ で $\dim X=n$、$\dim S=k$、$S$ は滑らかとする。各整数 $p$ に対し、有界連接導来圏の対象 $\underline\Omega\_{X/S}^{p,+}$ と $\underline\Omega\_{X/S}^{p,-}$ が存在する。右側は $p<0$、左側は $p>n-k$ で零に準同型となる。

絶対複体には関手的なhyperfiltrationがあり、その次数成分は

$$
G^{q,\pm}\underline\Omega\_X^p
\simeq\underline\Omega\_{X/S}^{p-q,\pm}\otimes f^\ast \Omega\_S^q,
\qquad0\leq q\leq k
$$

である。$f$ が滑らかなら両相対複体は通常の $\Omega\_{X/S}^p$ に一致し、有限開被覆に関する降下も満たす。左側の構成は先行研究に由来し、右側を一般の滑らかな底へ拡張することが本論文の中心である。

### strict higher Du Boisファイバーでの基底変換（Theorem 1.2）

さらに $f$ を平坦とし、閉点 $s\in S$ のファイバー $X\_s$ がstrict-m-Du Bois特異点を持つとする。このとき

$$
\underline\Omega\_{X/S}^{p,+}\otimes\_{\mathcal O\_X}^{\mathbf L}\mathcal O\_{X\_s}
\simeq\underline\Omega\_{X\_s}^{p},\qquad0\leq p\leq m
$$

が成り立つ。右相対複体を導来制限する操作が、ファイバー自身の絶対複体を再現するという内容である。次数範囲とファイバーの特異点条件が対応する。

## 証明の見取り図

序論によれば、Kovácsの方法を精密化し、全空間の滑らかさを仮定せず右相対複体を直接構成する。曲線上では既存の右側の定義と一致することを確かめたうえで、strict higher Du Boisファイバーの平坦族に基底変換を証明する。

混合Hodge加群を用いたDirksの別構成との比較は今後の研究として言及されている。本論文の結果だけから両構成の一致を確定したものとは紹介しない。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.41719)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.41719v1) — Section 1, pp. 1–2
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.41719v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
