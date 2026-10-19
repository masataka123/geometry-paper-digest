---
layout: paper
title: Smooth Limits of Stable Manifolds
title_ja: 標準偏極多様体の滑らかな極限と次元3・4の境界
authors: Mu-Lin Li
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let X be a compact complex manifold of dimension n, and suppose that X is deformation equivalent to a stable manifold. Then X is projective whenever n <=3. We also construct, for every n >=4, smooth families of compact complex manifolds over the unit disc such that every fiber over the punctured disc is a stable manifold, while the central fiber is a non-Kahler Moishezon manifold.
topic: algebraic-geometry
tags:
- kahler-einstein-metrics
- birational-geometry
- moduli
- positivity
- hodge-theory
arxiv_id: 2610.23457v1
arxiv_url: https://arxiv.org/abs/2610.23457
arxiv_submitted: '2026-10-16'
arxiv_updated: '2026-10-16'
summary: 負のKähler–Einstein計量を持つ多様体の滑らかな極限は、複素次元3以下では射影的で、標準束がbigかつsemiampleとなることを示す。次元4以上では、一般ファイバーの標準束が豊富でも中央ファイバーが非Kähler Moishezonとなる例を構成し、次元の境界が鋭いことを示す。
abstract_en: Let X be a compact complex manifold of dimension n, and suppose that X is deformation equivalent to a stable manifold. Then X is projective whenever n <=3. We also construct, for every n >=4, smooth families of compact complex manifolds over the unit disc such that every fiber over the punctured disc is a stable manifold, while the central fiber is a non-Kahler Moishezon manifold.
summary_en: ''
abstract_ja: 著者は標準束が豊富な滑らかな多様体をstable manifoldと呼び、その変形でKähler性が保存される範囲を調べる。次元3以下では滑らかな極限の射影性を証明し、次元4以上では全ての次元で反例を構成する。正の結果では標準模型と第二コホモロジーの比較、反例ではK3曲面のHilbert squareを用いた片側だけのelementary transformationが中心となる。
abstract_source_url: https://arxiv.org/abs/2610.23457
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.23457v1](https://arxiv.org/abs/2610.23457)
- **著者:** Mu-Lin Li
- **初回投稿日:** 2026-10-16
- **最終更新日:** 2026-10-16
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

射影多様体の滑らかな極限が非Kählerになることは、Hironakaの例から知られている。それでは一般ファイバーが負のKähler–Einstein計量を持つという強い条件を加えると、中央ファイバーもKählerとなるだろうか。本論文はこの滑らかな極限の問題に次元に関して鋭い回答を与える。

複素次元3以下では中央ファイバーは射影的となり、標準束はbigかつsemiampleである。一般ファイバーの豊富性そのものを保持するとまでは主張しないが、Kähler性より強い射影性まで回復する。

次元4以上では、一般ファイバーの標準束が全て豊富でありながら、中央ファイバーが非Kähler Moishezonとなる滑らかな族を構成する。従って負のEinstein条件を仮定しても、高次元ではKähler性の閉性は成立しない。

## 背景と問題設定

本論文のstable manifoldは、標準束が豊富な滑らかなコンパクト複素多様体を意味する。負のKähler–Einstein計量を正規化した条件

$$
\operatorname{Ric}(\omega)=-\omega
$$

と標準束の豊富性は、Kodaira埋め込み定理とAubin–Yauの存在定理によって対応する。動力学の安定多様体という意味ではない。

単位円板$\Delta$上の固有正則劣沈め込み$\pi:\mathcal X\to\Delta$で、ファイバーが連結かつコンパクトであるものを考える。$t\ne0$の全てのファイバーで$K\_{X\_t}$が豊富な場合に、$X\_0$の性質を問う。Yauの問いには非正のEinstein曲率が含まれるが、本論文の結論はそのうち負曲率の滑らかな極限を扱う。

## 主結果

### 次元3以下の射影性（Theorem 1.2）

上記の族のファイバーの複素次元が$1\leq n\leq3$なら、$X\_0$は滑らかな射影多様体となり、

$$
K\_{X\_0}\ \text{is big and semiample}
$$

である。特にKählerである。三次元が核心であり、中央ファイバーの標準射はcrepantで、ファイバー次元は高々1、例外素因子は曲線へ収縮されるという、より細かな構造も得られる。

### 次元4以上の反例（Theorem 1.3）

全ての整数$n\geq4$について、複素次元$n$の連結コンパクトファイバーを持つ固有正則劣沈め込み$\mathcal M\to\Delta$で

$$
K\_{M\_t}\ \text{is ample}\quad(t\ne0),\qquad
M\_0\ \text{is Moishezon and not Kähler}
$$

となるものが存在する。Moishezonとは射影多様体と双有理であるという性質であり、ここではそれがKähler性を保証しない。これにより次元3以下という上限は最適である。

## 証明の見取り図

正の結果では、Riemann–Roch、一般ファイバーのKodaira消滅、半連続性から$K\_{X\_0}$のbignessを得る。多重種数の不変性と標準環の有限生成から相対標準模型を作り、第二コホモロジーとintersection cohomologyを比較する。

分解定理は固定因子・crepant例外因子の寄与を数え、滑らかな元の族の自明なmonodromyは極限$H^2$を純にする。余次元2のDu Val strataのADE根格子を照合して安定固定因子を排除する。三次元では残る基点集合も除去でき、逆Cartan行列による構成で収縮曲線全てに正次数を持つ直線束を得て、標準射の射影性を導く。

反例では、中央ファイバーだけが直線を含む四次K3曲面のペンシルの相対Hilbert squareから出発する。十分正な分岐二重被覆で一般ファイバーの標準束を豊富にし、中央に現れる二つの平面の一方だけをelementary transformationする。変換後の有効曲線が互いに逆の非零ホモロジー類を持つため、両方に正の積分を与えるKähler形式は存在しない。種数2以上の曲線との積で高次元化する。

## 原論文との対応

- **Abstractページ:** [Smooth Limits of Stable Manifolds](https://arxiv.org/abs/2610.23457)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.23457v1) — Section 1, pp. 1–3
- **Introduction中で言及された主要結果:** Theorems 1.2–1.3; Question 1.1はYauの問い
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.23457v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
